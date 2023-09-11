import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import { ShaderMaterial, UniformsUtils, ShaderLib } from 'three';

import { useAssets, useTexture } from '~js/hooks';
import fragment from '~shaders/cloud.frag';
import vertex from '~shaders/cloud.vert';

export default ({ size, position, speed }) => {
  const group = useRef();
  const mesh = useRef();
  const [width, height] = size;

  const src1 = useAssets('images/clouds/1.jpg');
  const t1 = useTexture(src1);

  const src2 = useAssets('images/clouds/2.jpg');
  const t2 = useTexture(src2);

  const myUniforms = useMemo(() => ({
    uTime: { value: 0 },
    uTxtShape: { value: t1 },
    uTxtCloudNoise: { value: t2 },
    uFac1: { value: 17.8 },
    uFac2: { value: 2.7 },
    uTimeFactor1: { value: 0.002 },
    uTimeFactor2: { value: 0.001 },
    uDisplStrenght1: { value: 0.04 },
    uDisplStrenght2: { value: 0.08 },
  }), [t1, t2]);

  const material = useMemo(() => {
    const mat = new ShaderMaterial({
      uniforms: { ...UniformsUtils.clone(ShaderLib.sprite.uniforms), ...myUniforms },
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    });

    return mat;
  }, [myUniforms]);

  useFrame(() => {
    if (material) {
      material.uniforms.uTime.value += 0.6;
      mesh.current.position.x += (0.0001 * speed);
      if (mesh.current.position.x > 7) {
        mesh.current.position.x = -7;
      }
    }
  });

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={position}
        scale={[width, height, 1]}
      >
        <planeBufferGeometry
          args={[1.0, 1.0, 5, 5]}
          attach="geometry" />
        <primitive
          object={material}
          attach="material"
        />
      </mesh>
    </group>
  );
};
