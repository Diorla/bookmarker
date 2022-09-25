import { useId } from "react";
import styled from "styled-components";
import InputProps from "./InputProps";
import Label from "./Label";
import StyledInput from "./StyledInput";
import Wrapper from "./Wrapper";

const ErrorWrapper = styled.div`
  color: ${({ theme }) => theme.error};
  font-style: italic;
  font-size: 1rem;
  margin-top: 0.1rem;
`;

export default function Input({ label, errorText, ...props }: InputProps) {
  const id = useId();
  return (
    <Wrapper style={props.style}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput {...props} id={id} ref={null} style={{}} />
      {errorText && <ErrorWrapper>{errorText}</ErrorWrapper>}
    </Wrapper>
  );
}
