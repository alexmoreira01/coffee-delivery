import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressForm } from "./components/AddressForm";
import { TitleForm } from "../TitleForm";
import { ContainerOrderForm, OrderSectionForm } from "./styles";
import { PaymentOptions } from "./components/PaymentOptions";

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

      <OrderSectionForm>
        <TitleForm
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["purple"]} />}
        />

        <PaymentOptions/>
        
      </OrderSectionForm>

    </ContainerOrderForm>
  )
}