import { Button } from "../Button";
import { CoffeesConfirmationTotal, ContainerCoffeesConfirmation } from "./styles";

export function CoffeesConfirmation() {
  return (
   <ContainerCoffeesConfirmation>
    <div>
      <p>Total de itens</p>
      <span>R$ 9,90</span>
    </div>

    <div>
      <p>Entrega</p>
      <span>R$ 3,50</span>
    </div>

    <CoffeesConfirmationTotal>
      <p>Total</p>
      <span>R$ 29,90</span>
    </CoffeesConfirmationTotal>

    <Button text="Confirmar Pedido" />

   </ContainerCoffeesConfirmation>
  )
}