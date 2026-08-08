'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { vertexShader } from './shaders/vertex';
import { fragmentShader } from './shaders/fragment';

type Shape = 'square' | 'circle' | 'triangle' | 'diamond';

const SHAPE_MAP: Record<Shape, number> = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3,
};

const MAX_CLICKS = 10;

interface BayerBackgroundProps {
  shape?: Shape;
  pixelSize?: number;
  ink?: string;
  hoverColor?: string;
  hoverRadius?: number;
  interactive?: boolean;
  hover?: boolean;
  className?: string;
}

export default function BayerBackground({
  shape = 'diamond',
  pixelSize = 4,
  ink = '#f6cf3e',
  hoverColor = '#ffdf80',
  hoverRadius = 0.35,
  interactive = true,
  hover = true,
  className = '',
}: BayerBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const propsRef = useRef({ shape, pixelSize, ink, hoverColor, hoverRadius, interactive, hover });
  propsRef.current = { shape, pixelSize, ink, hoverColor, hoverRadius, interactive, hover };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === 'undefined') return;

    const { shape, pixelSize, ink, hoverColor, hoverRadius, interactive, hover } =
      propsRef.current;

    const canvas = document.createElement('canvas');
    canvas.className = 'block h-full w-full';
    container.appendChild(canvas);

    const gl = canvas.getContext('webgl2');
    if (!gl) {
      container.removeChild(canvas);
      return;
    }

    const renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: false });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uResolution: { value: new THREE.Vector2() },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(ink) },
      uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)) },
      uClickTimes: { value: new Float32Array(MAX_CLICKS) },
      uShapeType: { value: SHAPE_MAP[shape] ?? 0 },
      uPixelSize: { value: pixelSize },
      uHover: { value: new THREE.Vector2(-1, -1) },
      uHoverColor: { value: new THREE.Color(hoverColor) },
      uHoverRadius: { value: hoverRadius },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      glslVersion: THREE.GLSL3,
      transparent: true,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const MAX_DIM = 1600;
    const resize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      if (w === 0 || h === 0) return;
      const scale = Math.min(1, MAX_DIM / Math.max(w, h));
      const bw = Math.max(1, Math.round(w * scale));
      const bh = Math.max(1, Math.round(h * scale));
      renderer.setSize(bw, bh, false);
      uniforms.uResolution.value.set(bw, bh);
    };

    const toCanvasCoords = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        return new THREE.Vector2(-1, -1);
      }
      const fx = (clientX - rect.left) * (canvas.width / rect.width);
      const fy = (rect.height - (clientY - rect.top)) * (canvas.height / rect.height);
      return new THREE.Vector2(fx, fy);
    };

    let clickIx = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (!interactive) return;
      const pos = toCanvasCoords(e.clientX, e.clientY);
      uniforms.uClickPos.value[clickIx].set(pos.x, pos.y);
      uniforms.uClickTimes.value[clickIx] = uniforms.uTime.value;
      clickIx = (clickIx + 1) % MAX_CLICKS;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!hover) return;
      const pos = toCanvasCoords(e.clientX, e.clientY);
      uniforms.uHover.value.set(pos.x, pos.y);
    };

    const clearHover = () => {
      uniforms.uHover.value.set(-1, -1);
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerleave', clearHover);
    window.addEventListener('blur', clearHover);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();

    let rafId = 0;
    const render = () => renderer.render(scene, camera);

    if (reduceMotion) {
      render();
    } else {
      const animate = () => {
        rafId = requestAnimationFrame(animate);
        if (document.hidden) return;
        uniforms.uTime.value = clock.getElapsedTime();
        render();
      };
      animate();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    window.addEventListener('resize', resize);
    resize();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', clearHover);
      window.removeEventListener('blur', clearHover);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
    />
  );
}
