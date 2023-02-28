import { useContext } from "react";
import { CartCoffeeItem, CoffeeCartContext } from "../../../../contexts/useCoffees";

import { CounterInput } from "../../../../components/CounterInput";
import { Trash } from "phosphor-react";

import { FormartValue } from "../../../../utils/formatValue";

import { ButtonRemove, ContainerActions, ContainerActionsContent, ContainerCoffeesCart } from "./styles";

interface CartCoffeeProps {
  coffee: CartCoffeeItem
}

export function CoffeesCart({ coffee }: CartCoffeeProps) {
  const { removeCoffeeCart, addCoffeeQuantity, removeCoffeeQuantity } = useContext(CoffeeCartContext);

  const priceTotalValue = coffee.price * coffee.quantity;
  const formattedValue = FormartValue(priceTotalValue);

  function handleRemoveCoffeeCart(){
    removeCoffeeCart(coffee.id);
  }

  function handleAddCoffeeQuantity(){
    addCoffeeQuantity(coffee.id);
  }

  function handleRemoveCoffeeQuantity(){
    removeCoffeeQuantity(coffee.id);
  }

  return(
    <ContainerCoffeesCart>
      <div>
        <img src={`/coffees/${coffee.img}`} alt="" />

        <ContainerActions>
          <p>{coffee.name}</p>

          <ContainerActionsContent>
            <CounterInput size="small" 
              quantity={coffee.quantity}
              onAddCoffeeQuantity={handleAddCoffeeQuantity}
              onRemoveCoffeeQuantity={handleRemoveCoffeeQuantity}
            />

            <ButtonRemove onClick={handleRemoveCoffeeCart}>
              <Trash size={16} />
              REMOVER
            </ButtonRemove>

          </ContainerActionsContent>

        </ContainerActions>


      </div>

      <p>R$ {formattedValue}</p>

    </ContainerCoffeesCart>

  )
}