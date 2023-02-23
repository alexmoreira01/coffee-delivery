import { Trash } from "phosphor-react";
import { CounterInput } from "../../../../components/CounterInput";
import { ButtonRemove, ContainerActions, ContainerActionsContent, ContainerCoffeesCart } from "./styles";

export function CoffeesCart() {
  return(
    <ContainerCoffeesCart>
      <div>
        <img src={`/coffees/Image-6.svg`} alt="" />

        <ContainerActions>
          <p>Expresso Tradicional</p>

          <ContainerActionsContent>
            <CounterInput size="small" />

            <ButtonRemove>
              <Trash size={16} />
              REMOVER
            </ButtonRemove>

          </ContainerActionsContent>

        </ContainerActions>


      </div>

      <p>R$ 9,90</p>

    </ContainerCoffeesCart>

  )
}