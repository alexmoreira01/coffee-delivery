import { useContext, useState } from "react";
import { CoffeeCartContext } from "../../../../../../contexts/useCoffees";
import { FormartValue } from "../../../../../../utils/formatValue";
import { Button } from "../Button";
import { CoffeesConfirmationTotal, ContainerCoffeesConfirmation } from "./styles";

export function CoffeesConfirmation() {
  const { totalPriceCart } = useContext(CoffeeCartContext);
  
  const formattedValue = FormartValue(totalPriceCart);
  const totalWithSend = FormartValue(totalPriceCart + 3.5)

  return (
    <ContainerCoffeesConfirmation>
      <div>
        <p>Total de itens</p>
        <span>R$ {formattedValue}</span>
      </div>

      <div>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>

      <CoffeesConfirmationTotal>
        <p>Total</p>
        <span>R$ {totalWithSend}</span>
      </CoffeesConfirmationTotal>

      <Button text="Confirmar Pedido" />

    </ContainerCoffeesConfirmation>
  )
}