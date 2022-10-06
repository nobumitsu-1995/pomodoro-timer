/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import * as THREE from 'three'

import Objects from '../index'
import { icosahedron, initIcosahedron, updateIcosahedron } from './icosahedron'
import { plane, updatePlane } from './plane'
import { createCapsules } from './capsules'

export default {
  title: 'organisms/TimerAnimation/Objects',
  component: Objects,
  argTypes: {},
} as ComponentMeta<typeof Objects>

const Template: ComponentStory<
  React.FC<{ mesh: any; init?: any; update?: any }>
> = (args) => {
  useEffect(() => {
    const canvas = document.querySelector('#canvas')
    // シーン
    const scene = new THREE.Scene()

    // カメラ
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 3000)
    camera.position.z = 10
    scene.add(camera)

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas!,
      antialias: true,
    })
    renderer.setClearColor('#666')
    renderer.setSize(350, 350)
    renderer.setPixelRatio(window.devicePixelRatio)

    // オブジェクトの作成
    scene.add(args.mesh)
    args.init && args.init(args.mesh)

    // 描画処理、アニメーション
    const clock = new THREE.Clock()
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      args.update && args.update(args.mesh, elapsedTime)

      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return <canvas id='canvas'></canvas>
}

export const Icosahedron = Template.bind({})
Icosahedron.args = {
  mesh: icosahedron,
  init: initIcosahedron,
  update: updateIcosahedron,
}

export const Plane = Template.bind({})
Plane.args = {
  mesh: plane,
  update: updatePlane,
}
