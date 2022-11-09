import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AuthorInfo,
  BlogCard,
  BlogCardWrapper,
  BlogContent,
  Categories,
  ContentWrapper,
  ImageWrapper,
} from '../styles/StyledBlog';
import { useQuery } from 'urql';

const blog = () => {
  const blogInfo = [
    {
      id: 1,
      imgURL: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      avatarURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      heading: 'What is promises in javascript',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    },
    {
      id: 2,
      imgURL: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      avatarURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      heading: 'React Developer roadmap',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    },
    {
      id: 3,
      imgURL: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      avatarURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      heading: 'How to learn nextjs effectively',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    },
  ];

  const blogsQuery = `query {
    blogs {
      data {
        id
        attributes{
          heading
          description
          blog_category {
            data{
              id
              attributes{
                title
                slug
                
              }
            }
          }
          image{
            data{
              attributes{
                formats
              }
            }
          }
          content
          createdAt
        }
      }
    }
  }`;

  const [result] = useQuery({
    query: blogsQuery,
  });

  const { fetching, error, data } = result;

  if (fetching) return <p>loading...</p>;
  if (error) return <p>oh no... {error.message}</p>;

  const blogs = data.blogs.data;
  console.log(blogs);

  return (
    <div>
      <div>carousel</div>
      <ContentWrapper>
        <BlogCardWrapper>
          {blogs.map((blog) => (
            <BlogCard key={blog.id}>
              <ImageWrapper>
                <Image
                  src={blog.attributes.image.data.attributes.formats.small.url}
                  alt=""
                  height={150}
                  width={200}
                />
              </ImageWrapper>
              <BlogContent>
                <div>
                  <Link href={'#'}>
                    <h2>{blog.attributes.heading}</h2>
                  </Link>

                  <p>{blog.attributes.description}</p>
                </div>
                <AuthorInfo>
                  <div>
                    <img src={blog.avatarURL} alt="" height={50} width={50} />
                  </div>
                  <div>
                    <p>Abdullah Al Siam</p>
                    <p>
                      {new Date(blog.attributes.createdAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        }
                      )}
                    </p>
                  </div>
                </AuthorInfo>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogCardWrapper>
        <Categories>
          <h3>Categories</h3>
          <Link href={'#'}>Javascript</Link>
          <Link href={'#'}>React</Link>
          <Link href={'#'}>DSA</Link>
          <Link href={'#'}>Others</Link>
        </Categories>
      </ContentWrapper>
    </div>
  );
};

export default blog;
