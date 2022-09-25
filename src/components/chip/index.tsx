import { HTMLAttributes } from "react";
import styled from "styled-components";
import dimension from "../../constants/dimension";
import size from "../../interfaces/size";

const StyledChip = styled.button<{ size: size }>`
  border-radius: ${({ size }) => 4 / dimension[size]}rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem ${({ theme }) => theme.greyLight2},
    inset -0.2rem -0.2rem 0.5rem ${({ theme }) => theme.white};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.black};
  border: none;
  font-size: ${({ size }) => 2 / dimension[size]}rem;
  padding: ${({ size }) => 0.5 / dimension[size]}rem
    ${({ size }) => 1 / dimension[size]}rem;
  &:hover {
    box-shadow: inset 0.1rem 0.1rem 0.125rem ${({ theme }) => theme.greyLight2},
      inset -0.1rem -0.1rem 0.125rem ${({ theme }) => theme.white};
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem ${({ theme }) => theme.greyLight2},
      inset -0.2rem -0.2rem 0.5rem ${({ theme }) => theme.white};
  }
`;

interface ChipProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
}
export default function Chip({ title, ...props }: ChipProps) {
  return (
    <StyledChip size="xs" {...props}>
      {title}
    </StyledChip>
  );
}
