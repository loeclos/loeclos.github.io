// 'use client';

// import React, { useEffect } from 'react';
// import * as THREE from "three.js";
// import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";


// function GamePage() {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000,
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     const controls = new PointerLockControls(camera, document.body);
//     document.addEventListener("click", () => controls.lock());

//     // Lighting
//     const light = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(light);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     directionalLight.position.set(5, 10, 5);
//     scene.add(directionalLight);

//     // Floor
//     const floorGeometry = new THREE.PlaneGeometry(50, 50);
//     const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
//     const floor = new THREE.Mesh(floorGeometry, floorMaterial);
//     floor.rotation.x = -Math.PI / 2;
//     scene.add(floor);

//     // Player
//     camera.position.y = 1.6;

//     // Enemy
//     const enemyGeometry = new THREE.BoxGeometry(1, 2, 1);
//     const enemyMaterial = new THREE.MeshStandardMaterial({ color: 0xff4136 });
//     const enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
//     enemy.position.set(0, 1, -5);
//     scene.add(enemy);

//     // Player movement
//     const moveSpeed = 0.1;
//     const keys = {};
//     document.addEventListener("keydown", (e) => (keys[e.code] = true));
//     document.addEventListener("keyup", (e) => (keys[e.code] = false));

//     // Shooting mechanics
//     const bullets = [];
//     document.addEventListener("click", () => {
//       const bullet = new THREE.Mesh(
//         new THREE.SphereGeometry(0.1),
//         new THREE.MeshBasicMaterial({ color: 0xffffff }),
//       );
//       bullet.position.set(
//         camera.position.x,
//         camera.position.y,
//         camera.position.z,
//       );
//       bullet.direction = new THREE.Vector3();
//       camera.getWorldDirection(bullet.direction);
//       bullets.push(bullet);
//       scene.add(bullet);
//     });

//     // Game loop
//     function animate() {
//       requestAnimationFrame(animate);

//       // Player movement
//       if (keys["KeyW"]) controls.moveForward(moveSpeed);
//       if (keys["KeyS"]) controls.moveForward(-moveSpeed);
//       if (keys["KeyA"]) controls.moveRight(-moveSpeed);
//       if (keys["KeyD"]) controls.moveRight(moveSpeed);

//       // Bullet movement
//       bullets.forEach((bullet, index) => {
//         bullet.position.addScaledVector(bullet.direction, 0.2);
//         if (bullet.position.distanceTo(camera.position) > 50) {
//           scene.remove(bullet);
//           bullets.splice(index, 1);
//         }
//       });

//       renderer.render(scene, camera);
//     }
//     animate();
//   }, []);

//   return (
//     <div>
//         <div className="hud">Health: <span id="health">100</span></div>
//         <div className="crosshair"></div>
//     </div>
//   );
// };

// export default GamePage;
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

const FPSGame = () => {
  const [health, setHealth] = useState(100);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [bullets, setBullets] = useState(30);
  
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const enemiesRef = useRef([]);
  const animationRef = useRef(null);
  const enemySpawnRef = useRef(null);

  const styles = {
    container: {
      width: '100%', 
      height: '100vh', 
      backgroundColor: '#111111', 
      position: 'relative', 
      overflow: 'hidden'
    },
    hud: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: '#FFFFFF',
      fontFamily: "'Press Start 2P', cursive"
    },
    crosshair: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '10px',
      height: '10px',
      border: '2px solid white',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 10
    },
    startScreen: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)',
      color: '#FFFFFF',
      fontFamily: "'Press Start 2P', cursive",
      zIndex: 10
    },
    startButton: {
      backgroundColor: '#FF4136',
      color: '#FFFFFF',
      border: 'none',
      padding: '10px 20px',
      fontFamily: "'Press Start 2P', cursive",
      cursor: 'pointer',
      marginTop: '20px'
    }
  };

  const ARENA_SIZE = 50;
  const SPAWN_INTERVAL = 2000; // Spawn enemies every 5 seconds
  const ENEMY_DAMAGE = 10;

  useEffect(() => {
    // Reset game state when component unmounts
    return () => {
      // Cancel animation frame
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Clear enemy spawn interval
      if (enemySpawnRef.current) {
        clearInterval(enemySpawnRef.current);
      }

      // Clean up Three.js resources
      if (sceneRef.current) {
        const scene = sceneRef.current;
        enemiesRef.current.forEach(enemy => scene.remove(enemy));
        enemiesRef.current = [];
      }

      // Remove renderer from DOM if it exists
      if (containerRef.current && rendererRef.current) {
        try {
          containerRef.current.removeChild(rendererRef.current.domElement);
        } catch (error) {
          console.warn('Could not remove renderer element:', error);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (!gameStarted) return;

    const initScene = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.y = 1.6; // Eye level

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const controls = new PointerLockControls(camera, renderer.domElement);
      scene.add(controls.getObject());

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(0, 10, 0);
      scene.add(directionalLight);

      // Walkable arena
      const arenaGeometry = new THREE.PlaneGeometry(ARENA_SIZE, ARENA_SIZE);
      const arenaMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
      const arena = new THREE.Mesh(arenaGeometry, arenaMaterial);
      arena.rotation.x = -Math.PI / 2;
      scene.add(arena);

      // Arena boundaries (invisible walls)
      const boundaryMaterial = new THREE.MeshBasicMaterial({ visible: false });
      const wallHeight = 5;
      
      // North wall
      const northWallGeometry = new THREE.PlaneGeometry(ARENA_SIZE, wallHeight);
      const northWall = new THREE.Mesh(northWallGeometry, boundaryMaterial);
      northWall.position.set(0, wallHeight/2, ARENA_SIZE/2);
      scene.add(northWall);

      // South wall
      const southWallGeometry = new THREE.PlaneGeometry(ARENA_SIZE, wallHeight);
      const southWall = new THREE.Mesh(southWallGeometry, boundaryMaterial);
      southWall.position.set(0, wallHeight/2, -ARENA_SIZE/2);
      southWall.rotation.y = Math.PI;
      scene.add(southWall);

      // East wall
      const eastWallGeometry = new THREE.PlaneGeometry(ARENA_SIZE, wallHeight);
      const eastWall = new THREE.Mesh(eastWallGeometry, boundaryMaterial);
      eastWall.position.set(ARENA_SIZE/2, wallHeight/2, 0);
      eastWall.rotation.y = Math.PI/2;
      scene.add(eastWall);

      // West wall
      const westWallGeometry = new THREE.PlaneGeometry(ARENA_SIZE, wallHeight);
      const westWall = new THREE.Mesh(westWallGeometry, boundaryMaterial);
      westWall.position.set(-ARENA_SIZE/2, wallHeight/2, 0);
      westWall.rotation.y = -Math.PI/2;
      scene.add(westWall);

      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;
      controlsRef.current = controls;

      // Spawn initial enemies
      spawnEnemies();

      // Periodic enemy spawning
      enemySpawnRef.current = setInterval(spawnEnemies, SPAWN_INTERVAL);

      const handleShoot = () => {
        if (bullets <= 0) return;

        setBullets(prev => prev - 1);
        
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera({ x: 0, y: 0 }, camera);

        const intersects = raycaster.intersectObjects(enemiesRef.current);
        if (intersects.length > 0) {
          const hitEnemy = intersects[0].object;
          scene.remove(hitEnemy);
          enemiesRef.current = enemiesRef.current.filter(enemy => enemy !== hitEnemy);
          setScore(prev => prev + 1);
        }
      };

      const animate = () => {
        // Check if game is still active
        if (!gameStarted) return;

        animationRef.current = requestAnimationFrame(animate);
        
        // Enemy movement and damage
        enemiesRef.current.forEach(enemy => {
          const direction = new THREE.Vector3()
            .subVectors(camera.position, enemy.position)
            .normalize();
          
          // Move towards player
          enemy.position.x += direction.x * 0.03;
          enemy.position.z += direction.z * 0.03;

          // Check proximity for player damage
          const distance = camera.position.distanceTo(enemy.position);
          if (distance < 2) {
            setHealth(prev => {
              const newHealth = Math.max(0, prev - ENEMY_DAMAGE);
              if (newHealth === 0) {
                setGameStarted(false);
              }
              return newHealth;
            });
          }
        });

        renderer.render(scene, camera);
      };

      document.addEventListener('mousedown', handleShoot);
      document.addEventListener('click', () => controls.lock());

      animate();

      return () => {
        // Remove event listeners
        document.removeEventListener('mousedown', handleShoot);
        document.removeEventListener('click', () => controls.lock());

        // Clear interval
        if (enemySpawnRef.current) {
          clearInterval(enemySpawnRef.current);
        }

        // Cancel animation frame
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    };

    const spawnEnemies = () => {
      const scene = sceneRef.current;
      const camera = cameraRef.current;

      if (!scene || enemiesRef.current.length >= 10) return;

      const enemyGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
      const enemyMaterial = new THREE.MeshStandardMaterial({ color: 0xFF851B });
      const enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
      
      // Spawn at random position within arena
      const halfArena = ARENA_SIZE / 2;
      enemy.position.x = Math.random() * (halfArena * 2) - halfArena;
      enemy.position.z = Math.random() * (halfArena * 2) - halfArena;
      enemy.position.y = 0.5;

      scene.add(enemy);
      enemiesRef.current.push(enemy);
    };

    return initScene();
  }, [gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setHealth(100);
    setScore(0);
    setBullets(30);
  };

  return (
    <div style={styles.container} ref={containerRef}>
      {!gameStarted && (
        <div style={styles.startScreen}>
          <h1>FPS Game</h1>
          <button 
            style={styles.startButton} 
            onClick={startGame}
          >
            Start Game
          </button>
        </div>
      )}
      
      {gameStarted && (
        <>
          <div style={styles.crosshair} />
          <div style={styles.hud}>
            <div>Health: {health}</div>
            <div>Score: {score}</div>
            <div>Bullets: {bullets}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default FPSGame;