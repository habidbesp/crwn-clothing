import styled from "styled-components";

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > :not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    & > :not(:last-child) {
      margin-right: unset;
    }
    & > :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
