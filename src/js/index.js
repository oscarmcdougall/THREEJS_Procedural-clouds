import 'normalize.css'
import '~css/fonts.css'
import '~css/main.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React, {useEffect} from 'react'
import {render} from 'react-dom'
import Message from './components/UI/Message'

import {useDebugMode} from '~js/hooks'

import Canvas from '~js/components/Canvas'
import Camera from '~js/components/Canvas/Camera'
import Sphere from '~js/components/Canvas/Sphere'
import Environment from '~js/components/Canvas/Environment'

/**
 * app
 */
const App = () => {
  const debugMode = useDebugMode()

  return (
    <>
      <Message/>
      <Canvas>
        <Camera />
        <Environment />
      </Canvas>
    </>
  )
}

/**
 * render app
 */
render(
  <App />,
  document.getElementById('app')
)
