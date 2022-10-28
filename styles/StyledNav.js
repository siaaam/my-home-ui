import styled from 'styled-components';

export const StyledNav = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  div {
    height: 50px;
    width: 60px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  ul {
    display: flex;
    gap: 20px;
  }

  a {
    padding: 1rem 1.5rem;
    color: var(--headline);
  }
`;
