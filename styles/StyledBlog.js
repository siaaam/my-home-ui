import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Categories = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  border: 2px solid var(--stroke);
  align-items: center;
  height: 40vh;
  position: sticky;
  top: 8rem;
  box-shadow: 1px 1px 10px 1px var(--secondary);
  h3 {
    border-bottom: 2px dotted var(--main);
  }
  a {
    font-size: 0.75rem;
    transition: all 0.2s ease;

    &:hover {
      color: #ddd;
    }
  }
`;

export const BlogCardWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const BlogCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--main);
  border-radius: 8px;
  margin: 1rem 2rem 1rem 0;
`;

export const ImageWrapper = styled.div`
  img {
    border-radius: 8px;
  }
`;

export const BlogContent = styled.div`
  padding: 0 1rem 0 2rem;

  h2 {
    color: var(--background);
    padding: 1rem 0;
    font-size: 1.2rem;

    &:hover {
      color: var(--secondary);
    }
  }

  p {
    font-size: 0.75rem;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  margin-top: 1rem;

  div {
    &:nth-child(1) {
      height: 50px;
      width: 50px;
      border-radius: 50%;

      img {
        height: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    &:nth-child(2) {
      margin-left: 1rem;

      p {
        font-size: 10px;
        padding: 0;
        margin: 0;
      }
    }
  }
`;
