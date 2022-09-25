import { useId } from "react";
import styled from "styled-components";
import TextareaProps from "./TextareaProps";
import Label from "./Label";
import StyledTextarea from "./StyledTextarea";
import Wrapper from "./Wrapper";

const ErrorWrapper = styled.div`
  color: ${({ theme }) => theme.error};
  font-style: italic;
  font-size: 1rem;
  margin-top: 0.1rem;
`;

export default function Textarea({
  label,
  errorText,
  ...props
}: TextareaProps) {
  const id = useId();
  return (
    <Wrapper style={props.style}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextarea {...props} id={id} ref={null} style={{}} />
      {errorText && <ErrorWrapper>{errorText}</ErrorWrapper>}
    </Wrapper>
  );
}
