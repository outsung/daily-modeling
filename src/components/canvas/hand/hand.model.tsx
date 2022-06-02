/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Bone, Group } from "three";

export default function Model(props) {
  const group = useRef<Group>(null);
  const { nodes, materials }: any = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/left-hand-white-webxr-tracking-ready/model.gltf"
  );

  const indexToModelIndex = [
    20, 19, 18, 17, 17, 16, 15, 14, 13, 13, 12, 11, 10, 9, 9, 8, 7, 6, 5, 5, 4,
    3, 2, 1, 0,
  ];

  useEffect(() => {
    group.current.rotateX(Math.PI);
    // group.current.rotateY(Math.PI);
    // group.current.rotateZ(90);
  }, []);

  console.log({
    Skeleton001: nodes.l_handMeshNode.skeleton.bones.map(
      (b: Bone, index: number) => {
        if (props.position) {
          const position = props.position[indexToModelIndex[index]];

          b.matrixWorldNeedsUpdate = true;
          b.position.set(position[0], position[1], position[2]);
        }
      }
    ),
  });

  return (
    <group
      ref={(g) => (group.current = g)}
      scale={[5, 5, 5]}
      // rotateX={(rotate) => {
      //   rotate;
      // }}
      dispose={null}
    >
      <primitive object={nodes["pinky-finger-tip"]} />
      <primitive object={nodes["pinky-finger-phalanx-distal"]} />
      <primitive object={nodes["pinky-finger-phalanx-intermediate"]} />
      <primitive object={nodes["pinky-finger-phalanx-proximal"]} />
      <primitive object={nodes["pinky-finger-metacarpal"]} />
      <primitive object={nodes["ring-finger-tip"]} />
      <primitive object={nodes["ring-finger-phalanx-distal"]} />
      <primitive object={nodes["ring-finger-phalanx-intermediate"]} />
      <primitive object={nodes["ring-finger-phalanx-proximal"]} />
      <primitive object={nodes["ring-finger-metacarpal"]} />
      <primitive object={nodes["middle-finger-tip"]} />
      <primitive object={nodes["middle-finger-phalanx-distal"]} />
      <primitive object={nodes["middle-finger-phalanx-intermediate"]} />
      <primitive object={nodes["middle-finger-phalanx-proximal"]} />
      <primitive object={nodes["middle-finger-metacarpal"]} />
      <primitive object={nodes["index-finger-tip"]} />
      <primitive object={nodes["index-finger-phalanx-distal"]} />
      <primitive object={nodes["index-finger-phalanx-intermediate"]} />
      <primitive object={nodes["index-finger-phalanx-proximal"]} />
      <primitive object={nodes["index-finger-metacarpal"]} />
      <primitive object={nodes["thumb-tip"]} />
      <primitive object={nodes["thumb-phalanx-distal"]} />
      <primitive object={nodes["thumb-phalanx-proximal"]} />
      <primitive object={nodes["thumb-metacarpal"]} />
      <primitive object={nodes.wrist} />
      <skinnedMesh
        geometry={nodes.l_handMeshNode.geometry}
        material={materials.Default_Material}
        skeleton={nodes.l_handMeshNode.skeleton}
      />
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/left-hand-white-webxr-tracking-ready/model.gltf"
);
