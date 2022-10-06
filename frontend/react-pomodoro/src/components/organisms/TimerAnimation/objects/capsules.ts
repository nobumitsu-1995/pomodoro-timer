import * as THREE from 'three'

const positions = [] as THREE.Vector3[]
const r = 7
for (let i = 0; i < 360; i++) {
  const rad = (i * Math.PI) / 180 + (Math.PI * 2) / 177 + Math.PI / 2
  const x = -r * Math.cos(rad)
  const y = r * Math.sin(rad)
  positions.push(new THREE.Vector3(x, y, 0))
}

const mesh = new THREE.Mesh(
  new THREE.CapsuleGeometry(0.1, 1, 10, 8),
  new THREE.MeshPhysicalMaterial({
    color: 0x5fa8d3,
    metalness: 0.5,
    flatShading: true,
  })
)

export const createCapsules = () => {
  const meshes = []
  for (let i = 0; i < 360; i++) {
    const _mesh = mesh.clone()
    _mesh.position.copy(positions[i])
    _mesh.lookAt(0, 0, 0)
    _mesh.rotation.z = Math.PI
    meshes.push(_mesh)
  }
  return meshes
}

export const updateCapsules = (
  progress: number,
  meshes: THREE.Mesh<THREE.CapsuleGeometry, THREE.MeshPhysicalMaterial>[]
) => {
  for (let i = 0; i < 360; i++) {
    if (i < 360 * progress) {
      meshes[i].visible = false
    }
  }
}
