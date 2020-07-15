// import Button from './../components/StyledButton';
import styled from 'styled-components'
import StyledButton from '../components/Button/StyledButton'

export const MLCButton = styled(StyledButton)`
    color: ${(props) => (props.secondary ? 'white' : '#ce0058')};
    border-color: ${props => props.darkBackground ? '#60003A' : '#ce0058'};
    border-radius: 0;
    padding: 10px 20px;
    background-color: ${(props) => (props.secondary ? props.darkBackground ? '#60003A' : '#ce0058' : 'transparent')};
    margin: 5px;
    
    &:hover {
        border-color: ${(props) => (props.secondary ? 'none' : '#d86018')};
    }
`

export const SecondaryButton = styled(MLCButton).attrs(props => ({
  secondary: 'true',
  darkBackground: 'true'
}))``
