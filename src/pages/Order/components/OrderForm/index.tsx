import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressForm } from "../AddressForm";
import { TitleForm } from "../TitleForm";
import { ContainerOrderForm, OrderSectionForm } from "./styles";

export function Orderform() {
  const { colors } = useTheme();

  return (
    <ContainerOrderForm>
      <h1>Complete seu pedido</h1>

      <OrderSectionForm>
        <TitleForm
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["yellow-dark"]} />}
        />

        <AddressForm/>

      </OrderSectionForm>

    </ContainerOrderForm>
  )
}