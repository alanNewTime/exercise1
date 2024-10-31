// import { useNavigate } from "react-router-dom"; // Helps with navigation
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importing font awsome
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; //importing the icon i want to use
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import React, { useState, useRef } from "react";

// function Window({ position, size, frameColor, glassColor }) {
//   const frameThickness = 0.6; // Thickness of the window frame
//   const glassThickness = 0.5; // Thickness of the glassh

//   return (
//     <>
//       {/* Frame */}
//       <mesh position={position}>
//         <boxGeometry
//           args={[
//             size[0] + frameThickness,
//             size[1] + frameThickness,
//             frameThickness,
//           ]}
//         />
//         <meshStandardMaterial attach="material" color={frameColor} />
//       </mesh>

//       {/* Glass Pane */}
//       <mesh
//         position={[
//           position[0],
//           position[1],
//           position[2] + glassThickness / 2, // Adjust position to overlap with the frame
//         ]}
//       >
//         <boxGeometry args={[size[0], size[1], glassThickness]} />
//         <meshStandardMaterial
//           attach="material"
//           color={glassColor}
//           transparent={true}
//           opacity={1}
//         />
//       </mesh>
//     </>
//   );
// }

// function Page3() {
//   const navigate = useNavigate();
//   // save the number from input passing through the local storage
//   // const numberFromInput = localStorage.getItem("initialNum");
//   // const frameFromInput = localStorage.getItem("initialColor1");
//   // const glassFromInput = localStorage.getItem("initialColor2");
//   // let number = Number(numberFromInput); //number inserted by the user
//   const [numberOfWindows, setNumberOfWindows] = useState(5);

//   // Calculate the center position of the windows HELPS WITH MAKING SURE THAT THE CLUSTER ROTATES AROUN ITS CENTER
//   // AND NOT AROUND THE CENTER OF A SPECIFIC WINDOW
//   const centerX = ((numberOfWindows - 1) * 3.5) / 2; // This is half the width based on spacing
//   const centerPosition = [centerX, 0, 0]; // Center position along the x-axis

//   return (
//     <>
//       <div className="main-content">
//         <Canvas camera={{ position: [-4, 1, 20], fov: 80 }}>
//           <ambientLight intensity={0.3} />

//           {/* Render windows based on the numberOfWindows state */}
//           {Array.from({ length: numberOfWindows }).map((_, index) => (
//             <Window
//               key={index}
//               position={[index * 3.5, 0, 0]}
//               size={[3, 8]}
//               frameColor="brown"
//               glassColor="lightblue"
//             />
//           ))}

//           {/* Set OrbitControls target to the center position */}
//           <OrbitControls target={centerPosition} />
//         </Canvas>

//         <div style={{ position: "absolute", top: 200, left: 20 }}>
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={() => setNumberOfWindows((prev) => Math.max(prev - 1, 0))}
//           >
//             Remove Window
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={() => setNumberOfWindows((prev) => prev + 1)}
//           >
//             Add Window
//           </button>
//         </div>
//       </div>

//       <div className="nav-buttons">
//         <FontAwesomeIcon
//           icon={faArrowLeft}
//           onClick={() => navigate("/Page2")}
//         />
//         {/* Uncomment if needed */}
//         {/* <FontAwesomeIcon
//           icon={faArrowRight}
//           onClick={() => navigate("/")}
//         /> */}
//       </div>
//     </>
//   );
// }

// export default Page3;

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";

function Window({ position, size, frameColor, glassColor }) {
  const frameThickness = 0.6; // Thickness of the window frame
  const glassThickness = 0.5; // Thickness of the glass

  return (
    <>
      {/* Frame */}
      <mesh position={position} castShadow>
        <boxGeometry
          args={[
            size[0] + frameThickness,
            size[1] + frameThickness,
            frameThickness,
          ]}
        />
        <meshStandardMaterial attach="material" color={frameColor} />
      </mesh>

      {/* Glass Pane */}
      <mesh
        position={[position[0], position[1], position[2] + glassThickness / 2]}
        castShadow
      >
        <boxGeometry args={[size[0], size[1], glassThickness]} />
        <meshStandardMaterial
          attach="material"
          color={glassColor}
          transparent
          opacity={1}
        />
      </mesh>
    </>
  );
}

function Page3() {
  const navigate = useNavigate();
  const [numberOfWindows, setNumberOfWindows] = useState(5);

  const centerX = ((numberOfWindows - 1) * 3.5) / 2; // Center position along the x-axis
  const centerPosition = [centerX, 0, 0];

  return (
    <>
      <div className="main-content">
        <Canvas camera={{ position: [3, 1, 20], fov: 80 }} shadows>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 3, 4]} intensity={1} castShadow />

          {/* Floor Plane */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]} // Rotate the plane to lie flat
            position={[centerX, -5, 0]} // Slightly above ground to avoid z-fighting
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="lightskyblue" />
          </mesh>

          {/* Render windows based on the numberOfWindows state */}
          {Array.from({ length: numberOfWindows }).map((_, index) => (
            <Window
              key={index}
              position={[index * 3.5, 0, 0]}
              size={[3, 8]}
              frameColor="brown"
              glassColor="lightblue"
            />
          ))}

          <OrbitControls target={centerPosition} />
        </Canvas>

        <div style={{ position: "absolute", top: 200, left: 20 }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setNumberOfWindows((prev) => Math.max(prev - 1, 0))}
          >
            Remove Window
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setNumberOfWindows((prev) => prev + 1)}
          >
            Add Window
          </button>
        </div>
      </div>

      <div className="nav-buttons">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate("/Page2")}
        />
      </div>
    </>
  );
}

export default Page3;
