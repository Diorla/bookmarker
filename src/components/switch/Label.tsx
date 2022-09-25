import styled from "styled-components";
import dimension from "./dimension";
import size from "../../interfaces/size";

export default styled.label<{ size: size }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ size }) => 3 / dimension[size]}rem;
  box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.greyLight2},
    -0.2rem -0.2rem 0.5rem ${({ theme }) => theme.white};
  background: rgba(255, 255, 255, 0);
  position: relative;
  cursor: pointer;
  border-radius: ${({ size }) => 1.6 / dimension[size]}rem;
  &::after {
    content: "";
    position: absolute;
    left: ${({ size }) => 0.4 / dimension[size]}rem;
    width: ${({ size }) => 2.1 / dimension[size]}rem;
    height: ${({ size }) => 2.1 / dimension[size]}rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.greyDark};
    transition: all 0.4s ease;
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      330deg,
      ${({ theme }) => theme.primaryDark} 0%,
      ${({ theme }) => theme.primary} 50%,
      ${({ theme }) => theme.primaryLight} 100%
    );
    opacity: 0;
    transition: all 0.4s ease;
  }
`;
