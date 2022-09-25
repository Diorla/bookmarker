import styled from "styled-components";
import size from "../../interfaces/size";
import MainButton from "./MainButton";

export default styled(MainButton)<{ size: size }>`
  background: ${({ theme }) => theme.primary};
  box-shadow: inset 0.2rem 0.2rem 1rem ${({ theme }) => theme.primaryLight},
    inset -0.2rem -0.2rem 1rem ${({ theme }) => theme.primaryDark},
    0.3rem 0.3rem 0.6rem ${({ theme }) => theme.greyLight2},
    -0.2rem -0.2rem 0.5rem ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  &:hover {
    color: ${({ theme }) => theme.greyLight1};
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem ${({ theme }) => theme.primaryDark},
      inset -0.2rem -0.2rem 1rem ${({ theme }) => theme.primaryLight};
  }
`;
