import React from 'react';
import './button.css'

class Button extends React.Component {
    render () {
        return (
            <button className='btn'>{this.props.label}</button>
        )
    }
}

Button.defaultProps = {
    label: 'Olá, mundo!'
}

export default Button;