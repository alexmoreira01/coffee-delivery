import { useContext, useState } from "react";
import { CoffeeCartContext } from "../../../../../../contexts/useCoffees";
import { FormartValue } from "../../../../../../utils/formatValue";
import { Button } from "../Button";
import { CoffeesConfirmationTotal, ContainerCoffeesConfirmation } from "./styles";

export function CoffeesConfirmation() {
  const { totalPriceCart } = useContext(CoffeeCartContext);

  const delivery = 3.5;
  
  const formattedTotalValue = FormartValue(totalPriceCart);
  const formattedTotalDelivery = FormartValue(delivery);
  const formattedTotalWithDelivery = FormartValue(totalPriceCart + delivery)

  return (
    <ContainerCoffeesConfirmation>
      <div>
        <p>Total de itens</p>
        <span>R$ {formattedTotalValue}</span>
      </div>

      <div>
        <p>Entrega</p>
        <span>R$ {formattedTotalDelivery}</span>
      </div>

      <CoffeesConfirmationTotal>
        <p>Total</p>
        <span>R$ {formattedTotalWithDelivery}</span>
      </CoffeesConfirmationTotal>

      <Button text="Confirmar Pedido" />

    </ContainerCoffeesConfirmation>
  )
}