import styled from "styled-components";

export default styled.input`
  padding: 0.6rem 0.8rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  box-shadow: inset 0.1rem 0.1rem 0.125rem ${({ theme }) => theme.greyLight2},
    inset -0.1rem -0.1rem 0.125rem ${({ theme }) => theme.white};
  background: none;
  font-family: inherit;
  color: ${({ theme }) => theme.black}b3;
  &::-moz-placeholder {
    color: ${({ theme }) => theme.greyDark};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.greyDark};
  }
  &::placeholder {
    color: ${({ theme }) => theme.greyDark};
  }
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.black};
    box-shadow: inset 0.2rem 0.2rem 0.5rem ${({ theme }) => theme.greyLight2},
      inset -0.2rem -0.2rem 0.5rem ${({ theme }) => theme.white};
  }
`;
