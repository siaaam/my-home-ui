import Link from 'next/link';
import React, { useState } from 'react';
import { Tab } from '../styles/StyledProjects';
import { useRouter } from 'next/router';

const TabComp = () => {
  const router = useRouter();
  console.log(router);
  //   const { slug } = router.query;

  const isActive = (category) => {
    return category === router.query.slug;
  };

  const links = [
    { id: 1, path: 'react', name: 'React' },
    { id: 2, path: 'nextjs', name: 'Nextjs' },
    { id: 3, path: 'strapi', name: 'Strapi' },
  ];

  return (
    <Tab>
      <Link
        className={router.pathname === '/projects' ? 'active' : ''}
        href={'/projects'}
      >
        All
      </Link>

      {links.map((link) => (
        <Link
          key={link.id}
          href={`/projects/${link.path}`}
          className={isActive(link.path) ? 'active' : ''}
        >
          {link.name}
        </Link>
      ))}
    </Tab>
  );
};

export default TabComp;
