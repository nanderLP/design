import { OrthographicCamera, PerspectiveCamera, Plane } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { FC } from "react";
import { Model } from "./Pencil";

const Preview: FC = () => {

  return (
    <>
    <PerspectiveCamera makeDefault fov={30} position={[0, 1, 8]}/>
      <ambientLight />
      <Model position={[0, 1, 0]}></Model>

    </>
  );
};

export default Preview;
