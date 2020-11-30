import * as THREE from "three";

type ShaderMaterialType = JSX.IntrinsicElements["shaderMaterial"] & {
  // Where does WobbleMaterialType get `ref` from ??
  ref: React.Ref<React.ReactNode>;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Possible to add dynamic names to namespace?
      colorMaterial: ShaderMaterialType;
    }
  }
}

export function shaderMaterial(
  uniforms: {
    [name: string]:
      | THREE.CubeTexture
      | THREE.Texture
      | Int32Array
      | Float32Array
      | THREE.Matrix4
      | THREE.Matrix3
      | THREE.Quaternion
      | THREE.Vector4
      | THREE.Vector3
      | THREE.Vector2
      | THREE.Color
      | number
      | boolean
      | Array<any>;
  },
  vertexShader: string,
  fragmentShader: string,
  onInit?: (_this: THREE.ShaderMaterial) => null
) {
  return class ShaderMaterialImpl extends THREE.ShaderMaterial {
    constructor(parameters: THREE.ShaderMaterialParameters) {
      const entries = Object.entries(uniforms);
      // Create unforms and shaders
      super({
        ...parameters,
        uniforms: entries.reduce(
          (acc, [name, value]) => ({ ...acc, [name]: { value } }),
          {}
        ),
        vertexShader,
        fragmentShader,
      });
      // Create getter/setters
      entries.forEach(([name]) =>
        Object.defineProperty(this, name, {
          get: () => this.uniforms[name].value,
          set: (v) => (this.uniforms[name].value = v),
        })
      );
      onInit?.(this);
    }
  };
}
