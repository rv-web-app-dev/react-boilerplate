import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { MLCButton, SecondaryButton } from './MLCStyles-Old'
import './MLC.css'

const onClick = () => {
  console.log('yes')
}

const MLC = () => (
  <Fragment>
    <MLCButton onClick={onClick} href='/login'>
        Login
    </MLCButton>
    <MLCButton onClick={onClick} href='/adviser-login'>
        Adviser Login
    </MLCButton>
    <MLCButton onClick={onClick} href='/learn-more' secondary>
        Learn more
    </MLCButton>
    <SecondaryButton onClick={onClick} href="/learn-more">Learn More</SecondaryButton>

    <div className="container">
        <span className="icon"><FontAwesomeIcon icon={faCheck} /></span>
        <h2 className="header">De Finibus Bonorum et Malorum</h2>
        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
        <p><a className="link" href="#">Learn more</a></p>
    </div>
  </Fragment>
)

export default MLC
