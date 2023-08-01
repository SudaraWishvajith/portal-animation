import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { Wraith } from "./Wraith";

export const Experience = () => {
  

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <CharacStage texture={"textures/anime_horror_dark_world.jpg"}>
         <Wraith scale={2} position-y={-2} />
      </CharacStage>
      <CharacStage texture={"textures/anime_lava_dark_world.jpg"} position-x={-2.5} rotation-y={Math.PI / 8 }>
        
      </CharacStage>
      
    </>
  );
};

export const CharacStage = ({
  children,
  texture,
  ...props
}) => {
  
  const map = useTexture(texture);
  return(
    <group {...props}>
       <RoundedBox args={[2, 3, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />
         {children}
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
        </RoundedBox>
    </group>
   
  )
}
