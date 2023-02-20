import { Minus, Plus } from "phosphor-react";
import { ButtonIcon, ContainerCounterInput } from "./styles";

export function CounterInput() {
  return (
    <ContainerCounterInput>
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