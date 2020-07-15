import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { MLCButton, SecondaryButton, Link, Description, Header, Icon, Container, CardContainer } from './styles'
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

<CardContainer>
      <Container>
      <Icon className="icon"><FontAwesomeIcon icon={faCheck} /></Icon>
      <Header className="header">De Finibus Bonorum et Malorum</Header>
      <Description>At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque.</Description>
        <Link href="#">Learn more</Link>
    </Container>

    <Container>
      <Icon className="icon"><FontAwesomeIcon icon={faCheck} /></Icon>
      <Header className="header">De Finibus Bonorum et Malorum</Header>
      <Description>At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque.</Description>
        <Link href="#">Learn more</Link>
    </Container>

    <Container>
      <Icon className="icon"><FontAwesomeIcon icon={faCheck} /></Icon>
      <Header className="header">De Finibus Bonorum et Malorum</Header>
      <Description>At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque.</Description>
        <Link href="#">Learn more</Link>
    </Container>
</CardContainer>

  </Fragment>
)

export default MLC
