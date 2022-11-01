import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillChrome } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { ImageWrapper } from '../styles/StyledLeftBar';
import { CardLinks, ProjectCard } from '../styles/StyledProjects';

const PorjectCardComp = ({ project }) => {
  const router = useRouter();
  return (
    <ProjectCard key={project.id}>
      <ImageWrapper>
        <Image src="/assets/project1.jpg" alt="" width={400} height={300} />
      </ImageWrapper>
      <h2>{project.attributes.title}</h2>
      <CardLinks>
        <div>
          {/* <span>#{project.attributes.category.name}</span> */}
          <span>#strapi</span>
        </div>

        <div>
          <Link href={project.attributes.github}>
            <BsGithub />
          </Link>
          <Link href={project.attributes.github}>
            {/* <IoEarth /> */}
            <AiFillChrome />
          </Link>
        </div>
      </CardLinks>

      <p>used stack : react, graphQL, strapi</p>
      <p>
        {project.attributes.description.length
          ? project.attributes.description.slice(0, 120) + '...'
          : project.attributes.description}
      </p>
      <button onClick={() => router.push(`/projectDetails/${project.id}`)}>
        learn more
      </button>
    </ProjectCard>
  );
};

export default PorjectCardComp;
