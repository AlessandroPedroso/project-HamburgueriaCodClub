
import { Button as ContainerButton } from "./styles"

import PropTypes from 'prop-types';

const Button = ({children,...props}) => {
    //console.log({...props})
    
    return <ContainerButton {...props} >{children}</ContainerButton>

}

export default Button

Button.propTypes = {
    children: PropTypes.string
}