import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/sample">Sample</Link></li>
      <li><Link to="/mlc">MLC Life Insurance</Link></li>
      <li><Link to="/refs">Ref Playground</Link></li>
      <li><Link to="/hooks">Hooks Playground</Link></li>
      <li><Link to="/redux">Redux Playground</Link></li>
    </ul>
    <hr/>
  </div>
)

export default Navigation
