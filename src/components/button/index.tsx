import ButtonProps from "./ButtonProps";
import DefaultButton from "./DefaultButton";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Button({
  children,
  variant,
  size = "xs",
  ...props
}: ButtonProps) {
  if (variant === "primary")
    return (
      <PrimaryButton size={size} {...props}>
        {children}
      </PrimaryButton>
    );
  if (variant === "secondary")
    return (
      <SecondaryButton size={size} {...props}>
        {children}
      </SecondaryButton>
    );
  return (
    <DefaultButton size={size} {...props}>
      {children}
    </DefaultButton>
  );
}
