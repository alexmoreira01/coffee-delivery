import { Minus, Plus } from "phosphor-react";
import { ButtonIcon, ContainerCounterInput } from "./styles";

interface CounterInputProps {
  size?: "medium" | "small"; 
}

export function CounterInput({size = 'medium'}: CounterInputProps) {
  return (
    <ContainerCounterInput size={size}>
      <ButtonIcon>
        <Minus size={14} width="fill" />
      </ButtonIcon>

      <input type="number" readOnly value={1} />

      <ButtonIcon>
        <Plus size={14} width="fill" />
      </ButtonIcon>
    </ContainerCounterInput>
  )
}