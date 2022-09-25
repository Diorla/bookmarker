import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import size from "../../interfaces/size";

export default interface SwitchProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size"
  > {
  size?: size;
  label?: string;
}
