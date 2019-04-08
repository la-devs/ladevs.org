import React from 'react';

import '../styles/footer.css';

const Footr = ({ children }) => (
  <footer>
    © {new Date().getFullYear()}, Built with ❤️ using
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footr
