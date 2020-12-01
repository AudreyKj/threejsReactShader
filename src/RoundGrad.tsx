import * as THREE from "three";
/// @ts-ignore
import React, { useRef } from "react";
import { ReactThreeFiber } from "react-three-fiber";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { shaderMaterial } from "./shaderMaterial";
/// @ts-ignore
import glsl from "babel-plugin-glsl/macro";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

extend({ OrbitControls });

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
      <circleGeometry args={[20, 128]} />
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

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls: any = useRef();

  useFrame((state) => {
    if (controls && controls.current) {
      controls.current.update();
    }
  });

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default function RoundGrad() {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <CameraControls />
      <Bg />
    </Canvas>
  );
}
