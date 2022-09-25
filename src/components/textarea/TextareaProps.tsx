import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export default interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  errorText?: string;
}
