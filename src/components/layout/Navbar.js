import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">Lyrics Finder</span>
      <span><a href="https://github.com/mynk-13" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-github" aria-hidden="true" /></a>
      </span>
    </nav>
  );
};

export default Navbar;
