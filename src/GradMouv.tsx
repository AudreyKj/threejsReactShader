// import * as THREE from "three";
// /// @ts-ignore
// import React from "react";
// //import { ReactThreeFiber } from "react-three-fiber";
// import { Canvas, useFrame } from "react-three-fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { shaderMaterial } from "./shaderMaterial";
/// @ts-ignore
//import glsl from "babel-plugin-glsl/macro";

import * as THREE from "three";
/// @ts-ignore
import React, { useRef, useState, Suspense } from "react";
import { ReactThreeFiber } from "react-three-fiber";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import { shaderMaterial } from "./shaderMaterial";
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

function Box(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet1.png");

  const mesh = useRef();

  const [hover, setHover] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      position={[0, 0.1, -20]}
    >
      <planeGeometry attach="geometry" args={[50, 10]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Dolly() {
  useFrame((state) => {
    state.camera.position.z = 20;
    //state.camera.updateProjectionMatrix();
  });
  return null;
}

function RimLight({
  brightness,
  color,
}: {
  brightness: number;
  color: string;
}) {
  return <pointLight color={color} position={[1, 1, 100]} castShadow />;
}

export default function GradMouv() {
  //plus foncé 1: #2f5266
  //plus foncé 2: #15252e
  //const [color, setColor] = useState("#4f8aab");

  //   const handleScroll = () => {
  //     console.log("window.scrollY", window.scrollY);
  //     console.log("window.scroll", window.scroll);
  //     if (window.scrollY > 20) {
  //       setColor("#2f5266");
  //     } else if (window.scrollY > 50) {
  //       setColor("#15252e");
  //     } else {
  //       setColor("#4f8aab");
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   });

  return (
    <>
      <Canvas
        style={{
          background: `linear-gradient(0deg,#4f8aab 30%,#cfd9df)`,
          height: "100vh",
          width: "100%",
        }}
      >
        <CameraControls />

        <RimLight brightness={70} color={"#fff"} />

        <Suspense fallback={"Loading..."}>
          <Box />
        </Suspense>
      </Canvas>
    </>
  );
}
