// import Button from './../components/StyledButton';
import styled from 'styled-components'
import StyledButton from '../Button/StyledButton'

export const MLCButton = styled(StyledButton)`
  color: ${(props) => (props.secondary ? 'white' : '#ce0058')};
  border-color: ${(props) => (props.darkBackground ? '#60003A' : '#ce0058')};
  border-radius: 0;
  padding: 10px 20px;
  background-color: ${(props) => (props.secondary ? (props.darkBackground ? '#60003A' : '#ce0058') : 'transparent')};
  margin: 5px;
  
  &:hover {
      border-color: ${(props) => (props.secondary ? 'none' : '#d86018')};
  }
`

export const SecondaryButton = styled(MLCButton).attrs((props) => ({
  secondary: 'true',
  darkBackground: 'true'
}))``

export const Container = styled.div`
  width: 300px;
  background-color: #f4f4f4;
  height: 300px;
  padding: 50px;
  margin: 20px;
  font-family: Lato;
  
  &:hover {
    box-shadow: 0px 0px 30px 8px rgba(150,147,147,0.52);
    transform: scale(1.02);
  }
`

export const Icon = styled.span`
  color: #ce0058;
  font-size: 3em;
`

export const Header = styled.h2`font-size: 1.5em;`

export const Description = styled.p`
  max-width: 80%;
  text-align: justify;
`

export const Link = styled.a`
  display: inline-block;
  color: #ce0058;
  font-weight: bolder;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 4px solid #ce0058;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

`
