import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import IndexPage from '../pages/index';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <IndexPage />,
    document.body.appendChild(document.createElement('div')),
  )
});
