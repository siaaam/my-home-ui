import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
// import { IoEarth } from 'react-icons/io';
import { AiFillChrome } from 'react-icons/ai';
import {
  CardLinks,
  ImageWrapper,
  ProjectCard,
  ProjectCardWrapper,
  StyledProjects,
  Tab,
} from '../styles/StyledProjects';

const projects = () => {
  return (
    <StyledProjects>
      <Tab>
        <Link href={'#'}>All</Link>
        <Link href={'#'}>React</Link>
        <Link href={'#'}>Nextjs</Link>
        <Link href={'#'}>Strapi</Link>
      </Tab>
      <ProjectCardWrapper>
        <ProjectCard>
          <ImageWrapper>
            <Image src="/assets/project1.jpg" alt="" width={400} height={300} />
          </ImageWrapper>
          <h2>React Project</h2>
          <CardLinks>
            <div>
              <span>#react</span>
              <span>#strapi</span>
            </div>

            <div>
              <Link href="#">
                <BsGithub />
              </Link>
              <Link href="#">
                {/* <IoEarth /> */}
                <AiFillChrome />
              </Link>
            </div>
          </CardLinks>

          <p>used stack : react, graphQL, strapi</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            ipsum?
          </p>
          <button>learn more</button>
        </ProjectCard>
        <ProjectCard>
          <ImageWrapper>
            <Image src="/assets/project2.jpg" alt="" width={400} height={300} />
          </ImageWrapper>
          <h2>React Project</h2>
          <CardLinks>
            <span>#react</span>
            <div>
              <Link href="#">
                <BsGithub />
              </Link>
              <Link href="#">
                {/* <IoEarth /> */}
                <AiFillChrome />
              </Link>
            </div>
          </CardLinks>

          <p>used stack : react, graphQL, strapi</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            ipsum?
          </p>
          <button>learn more</button>
        </ProjectCard>
        <ProjectCard>
          <ImageWrapper>
            <Image src="/assets/project3.jpg" alt="" width={400} height={300} />
          </ImageWrapper>
          <h2>React Project</h2>
          <CardLinks>
            <span>#react</span>
            <div>
              <Link href="#">
                <BsGithub />
              </Link>
              <Link href="#">
                {/* <IoEarth /> */}
                <AiFillChrome />
              </Link>
            </div>
          </CardLinks>

          <p>used stack : react, graphQL, strapi</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            ipsum?
          </p>
          <button>learn more</button>
        </ProjectCard>{' '}
        <ProjectCard>
          <ImageWrapper>
            <Image src="/assets/project4.jpg" alt="" width={400} height={300} />
          </ImageWrapper>
          <h2>React Project</h2>
          <CardLinks>
            <span>#react</span>
            <div>
              <Link href="#">
                <BsGithub />
              </Link>
              <Link href="#">
                {/* <IoEarth /> */}
                <AiFillChrome />
              </Link>
            </div>
          </CardLinks>

          <p>used stack : react, graphQL, strapi</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            ipsum?
          </p>
          <button>learn more</button>
        </ProjectCard>
      </ProjectCardWrapper>
    </StyledProjects>
  );
};

export default projects;
