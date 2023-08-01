import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { Wraith } from "./Wraith";

export const Experience = () => {
  const map = useTexture(
    "textures/anime_horror_dark_world.jpg"
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <RoundedBox args={[2, 3, 0.1]}>
        <MeshPortalMaterial>
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />
          <Wraith scale={2} position-y={-2} />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
        </RoundedBox>

    </>
  );
};
