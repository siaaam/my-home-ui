import Link from 'next/link';
import React from 'react';
import PorjectCardComp from '../../components/PorjectCardComp';
import {
  ProjectCardWrapper,
  StyledProjects,
  Tab,
} from '../../styles/StyledProjects';

import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import TabComp from '../../components/TabComp';

const Category = () => {
  const router = useRouter();

  const slug = router.query.slug;

  const filteredQuery = ` query getFilterdedCategories($slug : String!){
    categories(filters: {slug: {contains: $slug}}){
      data{
        attributes{
          slug
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
      }
   }
 }
 `;

  const [result] = useQuery({
    query: filteredQuery,
    variables: { slug: slug },
  });

  const { fetching, error, data } = result;

  if (fetching) return <p>loading..</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const projects = data.categories.data[0].attributes.projects.data;

  const slugA = data.categories.data[0].attributes.slug;

  return (
    <>
      {!fetching ? (
        <StyledProjects>
          <TabComp />
          {/* <Tab>
          <Link className="active" href={'/projects'}>
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

export default Category;
