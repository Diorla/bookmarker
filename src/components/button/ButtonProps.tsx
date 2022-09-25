import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import size from "../../interfaces/size";

export default interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary";
  size?: size;
}
