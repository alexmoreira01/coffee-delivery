import { Bank, CreditCard, Money } from "phosphor-react";
import { InputPayment } from "../../../InputPayment";
import { ContainerPaymentOptions } from "./styles";
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />
  },
}

export function PaymentOptions() {
  const { register, formState: {errors} } = useFormContext();

  const paymentError = errors?.payment?.message as unknown as string

  return (
    <ContainerPaymentOptions>
      
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <InputPayment
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("payment")}
        />
      ))}
      {paymentError && <p>{paymentError}</p>}
    </ContainerPaymentOptions>
  )
}