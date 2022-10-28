import styled from 'styled-components';

export const StyledLeftBar = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--headline);
    margin-bottom: 10px;
  }

  p {
    color: var(--paragraph);
  }
`;

export const Info = styled.div`
  color: var(--main);
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
`;

export const ImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 20px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
