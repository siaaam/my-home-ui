import Link from 'next/link';
import React from 'react';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { ImageWrapper, Info, StyledLeftBar } from '../styles/StyledLeftBar';

const LeftBar = () => {
  return (
    <div className="leftbar">
      <StyledLeftBar>
        <ImageWrapper>
          <img src="/upload.jpg" alt="" />
        </ImageWrapper>
        <h2>abdullah al siam</h2>
        <p>Frontend Developer</p>
        <Info>
          <BsTelephoneFill />
          <span>+8801406921514</span>
        </Info>

        <Info>
          <BsGithub />
          <Link href="https://github.com/siaaam">siaaam</Link>
        </Info>

        <Info>
          <SiGmail />
          <Link href="https://github.com/siaaam">siaaam</Link>
        </Info>
      </StyledLeftBar>
    </div>
  );
};

export default LeftBar;
