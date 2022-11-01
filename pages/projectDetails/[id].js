import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'urql';

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const getProductByID = `query getProductByID($id:ID){
    project(id: $id) {
      data{
        id
        attributes{
          title
          slug
          description
          live
          github
          
        }
      }
    }
  }
`;

  const [result] = useQuery({
    query: getProductByID,
    variables: { id },
  });

  const { fetching, error, data } = result;

  if (fetching) return <p>loading..</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const projectDetail = data.project.data.attributes;
  console.log(projectDetail);

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <h1>{projectDetail.title}</h1>
        <p>{projectDetail.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
