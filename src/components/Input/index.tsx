import { forwardRef, InputHTMLAttributes } from "react";
import { ContainerInput } from "./styles";

// Tipando input => Se tem todas as tipagens de um input padrão
type InputProps = InputHTMLAttributes<HTMLInputElement>

// export function Input({ ...props }: InputProps) {
//   return (
//     <ContainerInput { ...props } />
//   )
// }

// Nao passa as propriedades do react hook form pelas props padroes
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <ContainerInput {...props} ref={ref} />
    )
  }
)