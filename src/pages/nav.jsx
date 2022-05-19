import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return(
    <div>
      <span><Link to="/">Home</Link></span>&nbsp;|&nbsp;
      <span><Link to="/contacts">Contacts</Link></span>&nbsp;|&nbsp;
    </div>
  )
}

export default Navbar;
