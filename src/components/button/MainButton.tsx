import styled from "styled-components";
import dimension from "../../constants/dimension";
import size from "../../interfaces/size";

export default styled.button<{ size: size }>`
  border-radius: ${({ size }) => 4 / dimension[size]}rem;
  box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.greyLight2},
    -0.2rem -0.2rem 0.5rem ${({ theme }) => theme.white};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.black};
  border: none;
  font-size: ${({ size }) => 2 / dimension[size]}rem;
  padding: ${({ size }) => 1 / dimension[size]}rem
    ${({ size }) => 2 / dimension[size]}rem;
  &:disabled {
    cursor: not-allowed;
    box-shadow: inset 0.1rem 0.1rem 0.125rem ${({ theme }) => theme.greyLight2},
      inset -0.1rem -0.1rem 0.125rem ${({ theme }) => theme.white};
    opacity: 0.7;
  }
  &:disabled:hover {
    box-shadow: inset 0.1rem 0.1rem 0.125rem ${({ theme }) => theme.greyLight2},
      inset -0.1rem -0.1rem 0.125rem ${({ theme }) => theme.white};
  }
`;
