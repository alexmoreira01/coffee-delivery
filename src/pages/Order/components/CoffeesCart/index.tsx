import { Trash } from "phosphor-react";
import { CounterInput } from "../../../../components/CounterInput";
import { ButtonRemove, ContainerActions, ContainerActionsContent, ContainerCoffeesCart } from "./styles";

import { CartCoffeeItem } from "../../../../contexts/useCoffees";
import { FormartValue } from "../../../../utils/formatValue";

// interface CartCoffee {
//   coffee: CartCoffeeItem[]
// }

export function CoffeesCart({ id, name, img, model, description, price, quantity}: CartCoffeeItem) {
  // console.log(img)
  const formattedValue = FormartValue(price);

  return(
    <ContainerCoffeesCart>
      <div>
        <img src={`/coffees/${img}`} alt="" />

        <ContainerActions>
          <p>{name}</p>

          <ContainerActionsContent>
            <CounterInput size="small" 
              quantity={quantity}
            />

            <ButtonRemove>
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