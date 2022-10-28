import React from 'react';
import { StyledNav } from '../styles/StyledNav';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <StyledNav>
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </StyledNav>
    </div>
  );
};

export default Navbar;
