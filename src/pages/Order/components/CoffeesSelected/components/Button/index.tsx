import { ButtonHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import { ContainerButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <ContainerButton {...props}>
      <NavLink to="/cart/confirmed" title="Confirmação">
        {text}
      </NavLink>
    </ContainerButton>
  )
}