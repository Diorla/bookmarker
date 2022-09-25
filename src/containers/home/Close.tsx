import styled from "styled-components";

export default styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primaryLight};
  }
`;
