import { Bank, CreditCard, Money } from "phosphor-react";
import { InputPayment } from "../../../InputPayment";
import { ContainerPaymentOptions } from "./styles";

export function PaymentOptions(){
  return(
    <ContainerPaymentOptions>
      <InputPayment
        icon={<CreditCard size={16} />}
        name={"Cartão de crédito"}
      />
      <InputPayment
        icon={<Bank size={16} />}
        name={"Cartão de débito"}
      />
      <InputPayment
        icon={<Money size={16} />}
        name={"Dinheiro"}
      />

      
    </ContainerPaymentOptions>
  )
}