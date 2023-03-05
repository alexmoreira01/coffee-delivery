import { forwardRef, InputHTMLAttributes } from "react";
import { ContainerInput, InputErrorMessage, InputStyled, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
}

// Nao passa as propriedades do react hook form pelas props padroes
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    
    return (
      // Container para exibir o erro
      <InputErrorMessage className={className}>
        
        <ContainerInput hasError={!!error}>
          <InputStyled { ...props } ref={ref} />
          {rightText ? <RightText>{rightText}</RightText> : ''}
        </ContainerInput>

        {error ? <p> {error} </p> : ''}
      </InputErrorMessage>
    )
  }
)