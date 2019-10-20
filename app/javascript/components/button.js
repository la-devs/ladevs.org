import PropTypes from 'prop-types';
import React from 'react';

import '../styles/button.css';

const Button = (props) => {
  const {
    buttonType,
    size,
    icon,
    disabled,
    loading,
    action,
    children,
    style,
    onClick
  } = props

  const interactive = !disabled && !loading
  const clickHandler = (event) => {
    interactive && action(event)
  }

  return (
    <button
      {...(buttonType && { type: buttonType })}
      {...(!interactive && { disabled: true })}
      onClick={(onClick || clickHandler)}
      className={size}
      style={style}
    >
      { icon && icon() }
      {children}
    </button>
  )
}


Button.propTypes = {
  buttonType: PropTypes.oneOf([undefined, 'button', 'submit', 'reset']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  action: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.func,
}

Button.defaultProps = {
  buttonType: 'button',
  size: 'md',
  action: () => {}
}

export default Button;
