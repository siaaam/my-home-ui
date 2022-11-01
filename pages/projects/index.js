import React, { useState } from 'react';
import Link from 'next/link';

import {
  ProjectCardWrapper,
  StyledProjects,
  Tab,
} from '../../styles/StyledProjects';

import { useQuery } from 'urql';
import PorjectCardComp from '../../components/PorjectCardComp';
import TabComp from '../../components/TabComp';

const ProjectsQuery = `
query{
  projects{
    data{
      id
      attributes{
        title
        description
        slug
        github
        live
      }
    }
  }
}
`;

const projects = () => {
  const [result] = useQuery({ query: ProjectsQuery });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  // setProjects(data.projects.data);
  // console.log(projects);
  const projects = data.projects.data;

  return (
    <>
      {!fetching ? (
        <StyledProjects>
          <TabComp />
          {/* <Tab>
        <Link data-filter="data-all" href={'/projects'}>
          All
        </Link>
        <Link href={'/projects/react'}>React</Link>
        <Link href={'/projects/nextjs'}>Nextjs</Link>
        <Link href={'/projects/strapi'}>Strapi</Link>
      </Tab> */}
          <ProjectCardWrapper>
            {projects.map((project) => (
              <PorjectCardComp project={project} key={project.id} />
            ))}
          </ProjectCardWrapper>
        </StyledProjects>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default projects;
