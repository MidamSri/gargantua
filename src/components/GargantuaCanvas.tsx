import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GargantuaCanvasProps {
  scrollProgress: number; // 0 to 1
  activeChapter: number;
}

export const GargantuaCanvas: React.FC<GargantuaCanvasProps> = ({ scrollProgress, activeChapter }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x030712, 0.018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    rendererRef.current = renderer;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // 2. Infinite 3D Wireframe Tunnel (Singularity exact signature effect)
    // Create a 3D tube path along the Z-axis
    const points: THREE.Vector3[] = [];
    const tunnelLength = 500;
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const z = -t * tunnelLength;
      const x = Math.sin(t * Math.PI * 4) * 8;
      const y = Math.cos(t * Math.PI * 3) * 6;
      points.push(new THREE.Vector3(x, y, z));
    }
    const curve = new THREE.CatmullRomCurve3(points);

    // Tube Geometry for wireframe rings & grid
    const tubeGeo = new THREE.TubeGeometry(curve, 200, 4.5, 24, false);
    
    // Wireframe Mesh (Amber/Gold + Subtle Cyan)
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0xf5a623,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(tubeMesh);

    // Concentric glowing rings along the tunnel path
    const ringCount = 80;
    const ringsGroup = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(4.6, 0.04, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffbe3b,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    for (let i = 0; i < ringCount; i++) {
      const u = i / ringCount;
      const point = curve.getPointAt(u);
      const tangent = curve.getTangentAt(u);

      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(point);
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
      ringsGroup.add(ring);
    }
    scene.add(ringsGroup);

    // 3. High-Speed Particle Starfield Streaming Down the Tunnel
    const starCount = 4000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSpeeds = new Float32Array(starCount);

    const goldColor = new THREE.Color(0xf5a623);
    const cyanColor = new THREE.Color(0x38bdf8);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const point = curve.getPointAt(u);
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 4.2;

      starPositions[i * 3] = point.x + Math.cos(angle) * radius;
      starPositions[i * 3 + 1] = point.y + Math.sin(angle) * radius;
      starPositions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 4;

      starSpeeds[i] = 0.5 + Math.random() * 1.5;

      const pColor = Math.random() > 0.6 ? goldColor : (Math.random() > 0.3 ? cyanColor : whiteColor);
      starColors[i * 3] = pColor.r;
      starColors[i * 3 + 1] = pColor.g;
      starColors[i * 3 + 2] = pColor.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(245,166,35,0.8)');
    gradient.addColorStop(0.8, 'rgba(56,189,248,0.2)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const starMat = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // 4. Vanishing Point Gravitational Singularity Core (Event Horizon at distance)
    const coreGeo = new THREE.SphereGeometry(2.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const singularityCore = new THREE.Mesh(coreGeo, coreMat);
    
    // Core photon ring
    const coreRingGeo = new THREE.RingGeometry(2.55, 3.2, 64);
    const coreRingMat = new THREE.MeshBasicMaterial({
      color: 0xffbe3b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const coreRing = new THREE.Mesh(coreRingGeo, coreRingMat);
    singularityCore.add(coreRing);
    scene.add(singularityCore);

    // 5. Mouse Parallax & Dynamic Flight Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // Animation Clock
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let currentScroll = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Smooth scroll lerp along tunnel (0 to 1 maps along curve)
      currentScroll += (scrollProgress - currentScroll) * 0.06;
      const u = Math.min(Math.max(currentScroll, 0.001), 0.98);

      // Camera flies along the spline tube
      const camPos = curve.getPointAt(u);
      const lookPos = curve.getPointAt(Math.min(u + 0.05, 0.999));

      camera.position.x = camPos.x + mouseX * 1.5;
      camera.position.y = camPos.y - mouseY * 1.5;
      camera.position.z = camPos.z;
      camera.lookAt(lookPos.x + mouseX * 2, lookPos.y - mouseY * 2, lookPos.z);

      // Position Singularity Core further down the path
      const coreU = Math.min(u + 0.15, 0.999);
      const corePoint = curve.getPointAt(coreU);
      singularityCore.position.copy(corePoint);
      singularityCore.lookAt(camera.position);
      coreRing.rotation.z = time * 0.5;

      // Stream particles backwards for speed feel
      const pos = starGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < starCount; i++) {
        // Move particle along Z towards camera
        pos[i * 3 + 2] += starSpeeds[i] * delta * 20;
        if (pos[i * 3 + 2] > camera.position.z + 10) {
          pos[i * 3 + 2] = camera.position.z - 200 - Math.random() * 50;
        }
      }
      starGeo.attributes.position.needsUpdate = true;

      // Subtle pulse on wireframe tube
      tubeMat.opacity = 0.2 + Math.sin(time * 2) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [scrollProgress]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
};
