import size from "../interfaces/size";

type Dimension = {
  [key in size]: number;
};

const dimension: Dimension = {
  xs: 2,
  sm: 1.6,
  md: 1.2,
  lg: 1,
};
export default dimension;
