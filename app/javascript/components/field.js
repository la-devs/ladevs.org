import PropTypes from 'prop-types';
import React from 'react';

import '../styles/field.css';

const Field = (props) => {
  const {
    id,
    type,
    name,
    placeholder,
    onChange,
    error
  } = props

  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={error ? 'field invalid' : 'field'}
    />
  )
}


Field.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'date', 'image', 'search']),
}

Field.defaultProps = {
  type: 'text',
  name: 'input',
}

export default Field;
