import size from "../../interfaces/size";

type Dimension = {
  [key in size]: number;
};

const dimension: Dimension = {
  xs: 2.4,
  sm: 2.1,
  md: 1.8,
  lg: 1.5,
};

export default dimension;
