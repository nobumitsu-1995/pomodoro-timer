import * as THREE from 'three'

type MeshTypes = THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshNormalMaterial>

/** IcosahedronのMesh */
export const icosahedron = new THREE.Mesh(
  new THREE.IcosahedronGeometry(2),
  new THREE.MeshNormalMaterial({
    transparent: true,
  })
)

/** Icosahedronの位置を決定する関数
 * @param {MeshTypes} mesh - 位置を定義させるMesh
 */
export const initIcosahedron = (mesh: MeshTypes) => {
  mesh.position.z = 4
  mesh.rotation.x = Math.PI * (30 / 180)
  mesh.rotation.y = Math.PI * (45 / 180)
}

/** Icosahedronのアニメーションの関数
 * @param {MeshTypes}  mesh - アニメーションを適用させるMesh
 * @param {MeshTypes}  time - アニメーションの動作に使用する時間
 */
export const updateIcosahedron = (mesh: MeshTypes, time: number) => {
  mesh.position.y = Math.sin(time * 0.5) * 1.3
  mesh.position.x = Math.cos(time * 0.8)
  mesh.rotation.x = time / 2
  mesh.rotation.y = time / 2
}
