import React, { useEffect, useRef, useState } from 'react';

const FluidSimulation = () => {
  const canvasRef = useRef(null);
  const [pointers, setPointers] = useState([{ 
    id: -1, 
    x: 0, 
    y: 0, 
    dx: 0, 
    dy: 0, 
    down: false, 
    moved: false, 
    color: [30, 0, 300] 
  }]);
  
  const config = {
    TEXTURE_DOWNSAMPLE: 1,
    DENSITY_DISSIPATION: 0.98,
    VELOCITY_DISSIPATION: 0.99,
    PRESSURE_DISSIPATION: 0.8,
    PRESSURE_ITERATIONS: 25,
    CURL: 30,
    SPLAT_RADIUS: 0.005
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Initialize WebGL context
    gl.getExtension('EXT_color_buffer_float');
    gl.getExtension('OES_texture_float_linear');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Handle pointer events
    const handlePointerDown = (e) => {
      const pointer = {
        id: e.pointerId,
        x: e.clientX,
        y: e.clientY,
        dx: 0,
        dy: 0,
        down: true,
        moved: false,
        color: [Math.random() * 10 + 20, 0, Math.random() * 200 + 200]
      };
      
      setPointers(prev => [...prev, pointer]);
    };

    const handlePointerMove = (e) => {
      setPointers(prev => prev.map(p => {
        if (p.id === e.pointerId) {
          return {
            ...p,
            x: e.clientX,
            y: e.clientY,
            dx: e.clientX - p.x,
            dy: e.clientY - p.y,
            moved: true
          };
        }
        return p;
      }));
    };

    const handlePointerUp = (e) => {
      setPointers(prev => prev.filter(p => p.id !== e.pointerId));
    };

    // Create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, `
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, `
      precision highp float;
      precision highp sampler2D;
      
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      vec4 samplePressure(sampler2D pressure, vec2 coord) {
          vec2 cellOffset = vec2(0.0, 0.0);
          vec2 multiplier = vec2(1.0, 1.0);
          
          return texture2D(pressure, coord);
      }

      void main () {
          float L = samplePressure(uPressure, vL).x;
          float R = samplePressure(uPressure, vR).x;
          float T = samplePressure(uPressure, vT).x;
          float B = samplePressure(uPressure, vB).x;
          float C = samplePressure(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `);
    gl.compileShader(fragmentShader);

    // Create shader program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Add event listeners
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerout', handlePointerUp);

    // Animation frame
    let animationFrameId;
    const render = () => {
      if (!gl) return;
      
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      // Update simulation based on pointers
      pointers.forEach(pointer => {
        if (pointer.down && pointer.moved) {
          // Add forces to simulation
          const px = pointer.x / canvas.width;
          const py = 1.0 - pointer.y / canvas.height;
          const dx = pointer.dx * 10.0;
          const dy = pointer.dy * -10.0;
          
          // Update uniforms for the shader
          const colorLocation = gl.getUniformLocation(program, 'uColor');
          gl.uniform3fv(colorLocation, new Float32Array(pointer.color));
          
          const positionLocation = gl.getUniformLocation(program, 'uPosition');
          gl.uniform2f(positionLocation, px, py);
          
          const velocityLocation = gl.getUniformLocation(program, 'uVelocity');
          gl.uniform2f(velocityLocation, dx, dy);
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerout', handlePointerUp);
    };
  }, [pointers]);

  return (
    <div className="w-full h-full">
      <canvas 
        ref={canvasRef}
        className="w-full h-full touch-none"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
};

export default FluidSimulation;