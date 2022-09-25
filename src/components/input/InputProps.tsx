import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  errorText?: string;
}
