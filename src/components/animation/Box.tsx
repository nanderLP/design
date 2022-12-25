import { FC, useRef } from "react";
import { Box as ThreeBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Box: FC = () => {
  const ref = useRef<THREE.Mesh>();
  useFrame(() => {
    ref.current!.rotation.x += 0.01;
    ref.current!.rotation.y += 0.01;
  });
  return <ThreeBox ref={ref}></ThreeBox>;
};

export default Box