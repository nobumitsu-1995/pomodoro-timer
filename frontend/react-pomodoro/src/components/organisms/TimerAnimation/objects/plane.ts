import * as THREE from 'three'
import Texture from '../../../../assets/images/ring.png'

const texture = new THREE.TextureLoader().load(Texture)

type MeshType = THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>

/** planeのMesh */
export const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(30, 30, 2, 100),
  new THREE.MeshBasicMaterial({
    color: 0x007eff,
    map: texture,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
)

/** Icosahedronのアニメーションの関数
 * @param {MeshTypes}  mesh - アニメーションを適用させるMesh
 * @param {MeshTypes}  time - アニメーションの動作に使用する時間
 */
export const updatePlane = (mesh: MeshType, time: number) => {
  mesh.rotation.z = -time / 2
}

export const updatePlane2 = (mesh: MeshType, time: number) => {
  mesh.rotation.z = time / 8
}
