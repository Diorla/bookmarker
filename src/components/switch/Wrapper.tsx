import styled from "styled-components";
import dimension from "./dimension";
import size from "../../interfaces/size";

export default styled.div<{ size: size }>`
  width: ${({ size }) => 6 / dimension[size]}rem;
`;
