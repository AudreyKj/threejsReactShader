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
import { useDrag } from "react-use-gesture";
import { useSpring } from "react-spring";
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

  useSpring({
    from: {
      z: 500,
    },
    z: 100,
    onFrame: ({ z }: any) => {
      camera.position.z = z;
    },
  });

  camera.position.z = 20;

  useFrame(() => {
    if (controls && controls.current) {
      controls.current.update();
    }
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={true}
    />
  );
};

function Tweet1(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet1.png");
  const [position, setPosition] = useState<any>([0, 0.1, -20]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const mesh = useRef();

  const [hover, setHover] = useState(false);

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      position={position}
      {...bind()}
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

function Tweet2(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet2.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[20, 10, -30]}
    >
      <planeGeometry attach="geometry" args={[50, 30]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet3(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet3.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[50, 50, -30]}
    >
      <planeGeometry attach="geometry" args={[50, 30]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet4(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet4.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[60, 10, -10]}
    >
      <planeGeometry attach="geometry" args={[90, 40]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet5(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet5.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[80, 50, -10]}
    >
      <planeGeometry attach="geometry" args={[130, 40]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet6(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet6.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[-30, -40, -80]}
    >
      <planeGeometry attach="geometry" args={[130, 40]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet7(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet7.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[-30, 30, -50]}
    >
      <planeGeometry attach="geometry" args={[130, 40]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet8(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet8.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[-30, 110, -70]}
    >
      <planeGeometry attach="geometry" args={[140, 140]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet9(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet9.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[190, 110, 10]}
    >
      <planeGeometry attach="geometry" args={[140, 140]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet10(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet10.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[190, 110, 10]}
    >
      <planeGeometry attach="geometry" args={[140, 140]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet11(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet11.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[200, 150, 30]}
    >
      <planeGeometry attach="geometry" args={[140, 140]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet12(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet12.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[-30, 10, -300]}
    >
      <planeGeometry attach="geometry" args={[500, 150]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet13(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet13.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[500, 100, -20]}
    >
      <planeGeometry attach="geometry" args={[500, 150]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function Tweet14(props: any) {
  const texture = useLoader(THREE.TextureLoader, "tweet14.png");

  const mesh = useRef();

  const [hover2, setHover2] = useState(false);

  // var geometry = new THREE.PlaneGeometry(10, 10*.75);
  // var mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0,0,0)

  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => setHover2(true)}
      onPointerOut={(e) => setHover2(false)}
      position={[0, 50, -100]}
    >
      <planeGeometry attach="geometry" args={[700, 100]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

function MoveCam() {
  //set up state so we know if we are moving forward
  var moveForward = false;

  //define velocity as a vector3
  var velocity = new THREE.Vector3();
  var prevTime = performance.now();

  //moveforward is true when 'up' or 'w' is pressed
  var onKeyDown = function (event: any) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = true;
        console.log("onKeyDown! moveForward is now: " + moveForward);
        break;
    }
  };

  //moveforward is false when 'up' or 'w' is not pressed
  var onKeyUp = function (event: any) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = false;
        console.log("onKeyUp! moveForward is now: " + moveForward);
        break;
    }
  };

  //make sure our document knows what functions to call when a key is pressed.
  document.addEventListener("keydown", onKeyDown, false);
  document.addEventListener("keyup", onKeyUp, false);

  //time to render the movement every frame.
  useFrame((state) => {
    //lets make sure we can move camera smoothly based on user's performance.
    var time = performance.now();
    var delta = (time - prevTime) / 1000;

    //reset z velocity to be 0 always. But override it if user presses up or w. See next line...
    velocity.z -= velocity.z * 10.0 * delta;
    //if the user pressed 'up' or 'w', set velocity.z to a value > 0.
    if (moveForward) velocity.z -= 400.0 * delta;

    //pass velocity as an argument to translateZ and call it on camera.
    state.camera.translateZ(velocity.z * delta);

    prevTime = time;
  });

  return null;
}

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30;
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

export default function AnimForward() {
  return (
    <>
      <Canvas
        style={{
          background: `linear-gradient(0deg,#4f8aab 30%,#cfd9df)`,
          height: "100vh",
          width: "100%",
        }}
      >
        <RimLight brightness={90} color={"#fff"} />

        <Suspense fallback={"Loading..."}>
          <Tweet1 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet2 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet3 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet4 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet5 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet6 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet7 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet8 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet9 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet10 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet11 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet12 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet13 />
        </Suspense>
        <Suspense fallback={"Loading..."}>
          <Tweet14 />
        </Suspense>
        <MoveCam />
      </Canvas>
    </>
  );
}
