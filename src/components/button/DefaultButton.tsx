import styled from "styled-components";
import size from "../../interfaces/size";
import MainButton from "./MainButton";

export default styled(MainButton)<{ size: size }>`
  &:hover {
    color: ${({ theme }) => theme.greyDark};
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem ${({ theme }) => theme.greyLight2},
      inset -0.2rem -0.2rem 0.5rem ${({ theme }) => theme.white};
  }
`;
