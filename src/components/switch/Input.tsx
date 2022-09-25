import styled from "styled-components";

export default styled.input`
  display: none;
  &:checked ~ label::before {
    opacity: 1;
  }
  &:checked ~ label::after {
    left: 57%;
    background: ${({ theme }) => theme.greyLight1};
  }
`;
