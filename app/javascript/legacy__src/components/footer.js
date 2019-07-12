import React from 'react';

import '../styles/footer.css';

const Footer = ({ children }) => (
  <footer>
    © {new Date().getFullYear()}, Built with ❤️ using
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
