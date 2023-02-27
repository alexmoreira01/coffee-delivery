import { Minus, Plus } from "phosphor-react";
import { ButtonIcon, ContainerCounterInput } from "./styles";

interface CounterInputProps {
  size?: "medium" | "small"; 
  quantity: number;
  onAddCoffeeQuantity: () => void;
  onRemoveCoffeeQuantity: () => void;
}

export function CounterInput({size = 'medium', quantity, onAddCoffeeQuantity, onRemoveCoffeeQuantity}: CounterInputProps) {

  function handleAddCoffeeCart() {
    onAddCoffeeQuantity()
  }

  function handleRemoveCoffeeCart() {
    onRemoveCoffeeQuantity()
  }


  return (
    <ContainerCounterInput size={size}>
      <ButtonIcon onClick={handleRemoveCoffeeCart}>
        <Minus size={14} width="fill" />
      </ButtonIcon>

      <input type="number" readOnly value={quantity} />

      <ButtonIcon onClick={handleAddCoffeeCart}>
        <Plus size={14} width="fill" />
      </ButtonIcon>
    </ContainerCounterInput>
  )
}