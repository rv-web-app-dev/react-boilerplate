import React, { Fragment } from 'react'
import './About.css'
import dog from '../assets/images/dog.png'

const About = () => (
  <Fragment>
    <div className="about">
      <p>This is a boilerplate React application that has all the necessary dependent libraries being injected.</p>
      <p>You can use this to get started in developing a React web application quickly.</p>
    </div>
    <div className="address">
      <p>The main contributor of this project is: <strong>Rakesh Venkat</strong>.</p>
      <address>
        <ul>
          <li><a href="mailto:rakeshvenkat.au.work@gmail.com">Email the author</a></li>
          <li><a href="https://github.com/RakeshVenkat">Github profile</a></li>
          <li><a href="https://rakeshvenkat.github.io/RakeshVenkatPortfolio/">Portfolio</a></li>
        </ul>
      </address>
    </div>
  </Fragment>
)

export default About
