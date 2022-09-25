import { useId } from "react";
import Input from "./Input";
import Label from "./Label";
import Row from "../Row";
import SwitchProps from "./SwitchProps";
import Wrapper from "./Wrapper";

export default function Switch({ size = "sm", label, ...props }: SwitchProps) {
  const id = useId();

  return label ? (
    <Row style={props.style}>
      <Wrapper size={size}>
        <Input id={id} {...props} type="checkbox" ref={null} />
        <Label htmlFor={props.id || id} size={size}></Label>
      </Wrapper>
      <label
        htmlFor={props.id || id}
        style={{ marginLeft: 8, cursor: "pointer" }}
      >
        {label}
      </label>
    </Row>
  ) : (
    <Wrapper size={size} style={props.style}>
      <Input id={id} {...props} type="checkbox" ref={null} />
      <Label htmlFor={props.id || id} size={size}></Label>
    </Wrapper>
  );
}
