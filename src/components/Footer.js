import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer>&copy;{currentYear}, made by <a href="mailto:zwehrmeister@gmail.com">Zack</a></footer>
    );
  }
}
 export default Footer;
