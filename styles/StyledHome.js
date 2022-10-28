import styled from 'styled-components';

export const StyledHome = styled.div`
  height: calc(100vh - 140px);
  display: flex;
  gap: 20px;
  /* align-items: flex-start; */
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;
`;

export const Description = styled.div`
  flex: 1;
  padding: 20px;
  h2 {
    margin-bottom: 20px;

    span {
      font-size: 40px;
    }
  }

  p {
    margin: 15px 0;
  }

  button {
    width: 50%;
    background: var(--btn);
    color: var(--btn-text);
    height: 3.5rem;
    font-family: var(--fs);
    transition: all 0.2s ease-in;
    font-weight: 500;
    border-radius: 8px;

    &:hover {
      background: var(--secondary);
    }
  }
`;

export const SkillsCard = styled.div`
  flex: 1;
  padding: 20px;
  line-height: 200%;
  background: var(--background);
  border-radius: 4px;
  border: 2px solid var(--stroke);
  color: var(--paragraph);
  box-shadow: 1px 1px 1px 1px var(--stroke);

  h3 {
    margin-bottom: 20px;
  }

  p {
    font-size: 600;
  }
`;

export const Card = styled.div`
  /* background-color: var(--background); */
  /* padding: 10px; */
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  > span {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 20px;
  }
`;
