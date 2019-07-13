import React from 'react';

import '../styles/footer.css';

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with ❤️ using
    {` `}
    <a href="https://rubyonrails.org/">Rails 6</a>
    {` & `}
    <a href="https://reactjs.org/">React</a>
  </footer>
)

export default Footer
