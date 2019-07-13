/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../styles/layout.css';
import Header from './header';
import Footer from './footer';
import { SITE_METADATA } from '../utils/constants';

const Layout = ({ children }) => (
  <>
    <Header siteTitle={SITE_METADATA.title} />
    <div className='layout-container'>
      <main>{children}</main>
    </div>
    <div className='push' />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
