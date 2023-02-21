import { InputHTMLAttributes } from "react";
import { ContainerInput } from "./styles";

// Tipando input => Se tem todas as tipagens de um input padrão
type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return (
    <ContainerInput { ...props } />
  )
}