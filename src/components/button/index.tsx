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
      <PrimaryButton size={size} {...props} ref={null}>
        {children}
      </PrimaryButton>
    );
  if (variant === "secondary")
    return (
      <SecondaryButton size={size} {...props} ref={null}>
        {children}
      </SecondaryButton>
    );
  return (
    <DefaultButton size={size} {...props} ref={null}>
      {children}
    </DefaultButton>
  );
}
