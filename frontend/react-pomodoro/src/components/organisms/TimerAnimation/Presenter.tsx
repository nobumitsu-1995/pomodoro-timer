import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import {
  icosahedron,
  initIcosahedron,
  updateIcosahedron,
} from './objects/icosahedron'
import { plane, updatePlane, updatePlane2 } from './objects/plane'
import { createCapsules, updateCapsules } from './objects/capsules'

type Props = {
  progress: number
}

const Presenter: React.FC<Props> = ({ progress }) => {
  useEffect(() => {
    const canvas = document.querySelector('#canvas1')
    // シーン
    const scene = new THREE.Scene()

    // カメラ
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10)
    camera.position.z = 10
    scene.add(camera)

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      canvas: canvas!,
      antialias: true,
    })
    renderer.autoClearColor = false
    renderer.setSize(350, 350)
    renderer.setPixelRatio(window.devicePixelRatio)

    // オブジェクトの作成
    const icosahedron1 = icosahedron
    initIcosahedron(icosahedron)
    const plane1 = plane
    const plane2 = plane.clone()
    scene.add(icosahedron1, plane1, plane2)

    // 描画処理、アニメーション
    const clock = new THREE.Clock()
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      updatePlane(plane1, elapsedTime)
      updatePlane2(plane2, elapsedTime)
      updateIcosahedron(icosahedron1, elapsedTime)
      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()
  }, [])

  useEffect(() => {
    const canvas = document.querySelector('#canvas2')
    // シーン
    const scene = new THREE.Scene()

    // カメラ
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 15)
    camera.position.z = 10
    scene.add(camera)

    // 光源
    const directionalLight = new THREE.DirectionalLight(0xcccccc, 2)
    directionalLight.position.set(3, 3, 5)
    scene.add(directionalLight)

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      canvas: canvas!,
      antialias: true,
    })
    renderer.autoClearColor = false
    renderer.setSize(350, 350)
    renderer.setPixelRatio(window.devicePixelRatio)

    // オブジェクトの作成
    const capsules = createCapsules()
    capsules.forEach((capsule) => scene.add(capsule))

    // 描画処理、アニメーション
    const animate = () => {
      updateCapsules(progress, capsules)
      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()
  }, [progress])

  return (
    <>
      <StyledCanvas id='canvas1'></StyledCanvas>
      <StyledCanvas id='canvas2'></StyledCanvas>
    </>
  )
}

export default Presenter

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  margin: 0 auto;
`
