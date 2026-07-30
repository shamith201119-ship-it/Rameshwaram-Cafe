import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FoodCanvas3DProps {
  isGheeMode?: boolean;
}

export const FoodCanvas3D: React.FC<FoodCanvas3DProps> = ({ isGheeMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 1. Steam Particles System
    const steamCount = 350;
    const steamGeometry = new THREE.BufferGeometry();
    const steamPositions = new Float32Array(steamCount * 3);
    const steamScales = new Float32Array(steamCount);
    const steamSpeeds = new Float32Array(steamCount);

    for (let i = 0; i < steamCount; i++) {
      steamPositions[i * 3] = (Math.random() - 0.5) * 20;
      steamPositions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      steamPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      steamScales[i] = Math.random() * 0.4 + 0.1;
      steamSpeeds[i] = Math.random() * 0.02 + 0.01;
    }

    steamGeometry.setAttribute('position', new THREE.BufferAttribute(steamPositions, 3));

    const steamMaterial = new THREE.PointsMaterial({
      color: isGheeMode ? 0xf1ca63 : 0xe0d2c1,
      size: 0.25,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const steamParticles = new THREE.Points(steamGeometry, steamMaterial);
    scene.add(steamParticles);

    // 2. Glowing Podi / Gold Dust Particles
    const podiCount = 200;
    const podiGeometry = new THREE.BufferGeometry();
    const podiPositions = new Float32Array(podiCount * 3);

    for (let i = 0; i < podiCount; i++) {
      podiPositions[i * 3] = (Math.random() - 0.5) * 25;
      podiPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      podiPositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    podiGeometry.setAttribute('position', new THREE.BufferAttribute(podiPositions, 3));

    const podiMaterial = new THREE.PointsMaterial({
      color: isGheeMode ? 0xffd700 : 0xd4973b,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const podiParticles = new THREE.Points(podiGeometry, podiMaterial);
    scene.add(podiParticles);

    // 3. Central Glowing Ghee Ring (Simulating Tawa / Dosa Rim Light)
    const ringGeo = new THREE.TorusGeometry(5, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isGheeMode ? 0xffea79 : 0xd4973b,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp Mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Parallax Scene Tilt
      scene.rotation.y = mouseRef.current.x * 0.3 + elapsedTime * 0.05;
      scene.rotation.x = mouseRef.current.y * 0.2;

      // Animate Steam upward
      const positions = steamGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < steamCount; i++) {
        positions[i * 3 + 1] += steamSpeeds[i];
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -10;
        }
      }
      steamGeometry.attributes.position.needsUpdate = true;

      // Animate Ring Rotation
      ringMesh.rotation.z = elapsedTime * 0.15;
      ringMesh.rotation.y = Math.sin(elapsedTime * 0.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      steamGeometry.dispose();
      steamMaterial.dispose();
      podiGeometry.dispose();
      podiMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, [isGheeMode]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10" />;
};
