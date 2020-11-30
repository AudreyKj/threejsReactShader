import * as THREE from "three";
/// @ts-ignore
import React, { useEffect, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { shaderMaterial } from "./shaderMaterial";
/// @ts-ignore
import glsl from "babel-plugin-glsl/macro";

const ColorMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  glsl`varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  glsl`uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
    }`
);

extend({ ColorMaterial });

function Bg() {
  const { viewport } = useThree();
  const max = Math.max(viewport.width, viewport.height);

  const ref: any = useRef();

  useFrame((state, delta) => {
    if (ref) {
      ref.current.time += delta;
    }
  });
  return (
    <mesh scale={[max, max, 1]}>
      <planeBufferGeometry />
      <colorMaterial ref={ref} />
    </mesh>
  );
}

function Box() {
  const ref: any = useRef();
  useFrame((state, delta) => {
    if (ref) {
      ref.current.material.time += delta;
      ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z +=
        delta / 2;
    }
  });
  return (
    <mesh ref={ref} scale={[2, 2, 2]}>
      <boxBufferGeometry />
      <colorMaterial color="#203050" ref={ref} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <Bg />
      <Box />
    </Canvas>
  );
}
