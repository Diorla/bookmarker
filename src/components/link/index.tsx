import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

// interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}
const StyledLink = styled.a`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primaryLight};
  }
  &:active {
    color: ${({ theme }) => theme.primaryDark};
  }
`;

export default function Link(props: LinkProps) {
  return <StyledLink {...props} ref={null} />;
}
