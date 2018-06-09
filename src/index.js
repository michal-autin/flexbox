import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import { BoxOne, BoxTwo, BoxThree } from './Boxes.js'

import './styles.css'

const App = () => {
  return (
    <div className="container-1">
      <BoxOne />
      <BoxTwo />
      <BoxThree />
    </div>
  )
}

render(<App />, document.getElementById('root'))
