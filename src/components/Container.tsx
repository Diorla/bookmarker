import styled from "styled-components";

export default styled.div`
  background: ${({ theme }) => theme.greyLight1};
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
