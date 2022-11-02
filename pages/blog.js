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
} from '../styles/StyledBlog';

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

const blog = () => {
  return (
    <div>
      <div>carousel</div>
      <ContentWrapper>
        <BlogCardWrapper>
          {blogInfo.map((blog) => (
            <BlogCard>
              <div>
                <Image src={blog.imgURL} alt="" height={150} width={200} />
              </div>
              <BlogContent>
                <div>
                  <Link href={'#'}>
                    <h2>{blog.heading}</h2>
                  </Link>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, veritatis fugiat! Quo, obcaecati. Similique
                    officiis illum debitis
                  </p>
                </div>
                <AuthorInfo>
                  <div>
                    <img src={blog.avatarURL} alt="" height={50} width={50} />
                  </div>
                  <div>
                    <p>Abdullah Al Siam</p>
                    <p>Tuesday, 20 August , 2022</p>
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
