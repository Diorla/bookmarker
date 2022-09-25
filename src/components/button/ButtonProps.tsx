import { HTMLAttributes } from "react";
import size from "../../interfaces/size";

export default interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: size;
}
