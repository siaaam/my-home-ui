import styled from 'styled-components';

export const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  a {
    padding: 10px;
  }
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  width: 70vw;
  position: relative;
  top: 100px;
  padding-bottom: 100px;
`;

export const Tab = styled.div`
  grid-column: 1/-1;
  margin-bottom: 60px;
  position: fixed;
  z-index: 999;
  background: var(--background);
  width: 100%;
  padding: 20px 0px;

  a {
    transition: all 0.2s ease-in;

    &:hover {
      color: var(--tertiary);
    }
  }
`;

export const ProjectCard = styled.div`
  /* border: 2px solid var(--stroke); */
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 0.2);
  margin: 10px;
  flex: auto;
  background: var(--main);

  h2 {
    color: var(--background);
    margin: 20px auto;
    width: 450px;
  }
  p {
    width: 450px;
    margin: 20px auto;
  }

  button {
    display: block;
    background: var(--btn);
    height: 3rem;
    margin: 0 auto;
    width: 100%;
    border: none;
    font-family: 'Roboto Mono';
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 0 0 8px 8px;

    &:hover {
      background: var(--secondary);
    }
  }
`;

export const ImageWrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 400px;
  background: var(--tertiary);
`;

export const CardLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin: 0 auto;

  div {
    padding: 10px 0px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  span {
    background: var(--tertiary);
    color: var(--main);
    padding: 10px;
    padding-right: 30px;

    border-radius: 30px;
  }

  a {
    font-size: 16px;
  }

  svg {
    font-size: 2.5rem;
    margin-right: 5px;
    color: var(--secondary);
  }
`;
