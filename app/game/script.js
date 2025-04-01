import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

window.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new PointerLockControls(camera, document.body);
  document.addEventListener("click", () => controls.lock());

  // Lighting
  const light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 5);
  scene.add(directionalLight);

  // Floor
  const floorGeometry = new THREE.PlaneGeometry(50, 50);
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  // Player
  camera.position.y = 1.6;

  // Enemy
  const enemyGeometry = new THREE.BoxGeometry(1, 2, 1);
  const enemyMaterial = new THREE.MeshStandardMaterial({ color: 0xff4136 });
  const enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
  enemy.position.set(0, 1, -5);
  scene.add(enemy);

  // Player movement
  const moveSpeed = 0.1;
  const keys = {};
  document.addEventListener("keydown", (e) => (keys[e.code] = true));
  document.addEventListener("keyup", (e) => (keys[e.code] = false));

  // Shooting mechanics
  const bullets = [];
  document.addEventListener("click", () => {
    const bullet = new THREE.Mesh(
      new THREE.SphereGeometry(0.1),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
    );
    bullet.position.set(
      camera.position.x,
      camera.position.y,
      camera.position.z,
    );
    bullet.direction = new THREE.Vector3();
    camera.getWorldDirection(bullet.direction);
    bullets.push(bullet);
    scene.add(bullet);
  });

  // Game loop
  function animate() {
    requestAnimationFrame(animate);

    // Player movement
    if (keys["KeyW"]) controls.moveForward(moveSpeed);
    if (keys["KeyS"]) controls.moveForward(-moveSpeed);
    if (keys["KeyA"]) controls.moveRight(-moveSpeed);
    if (keys["KeyD"]) controls.moveRight(moveSpeed);

    // Bullet movement
    bullets.forEach((bullet, index) => {
      bullet.position.addScaledVector(bullet.direction, 0.2);
      if (bullet.position.distanceTo(camera.position) > 50) {
        scene.remove(bullet);
        bullets.splice(index, 1);
      }
    });

    renderer.render(scene, camera);
  }
  animate();
});
