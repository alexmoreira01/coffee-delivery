import { ReactNode } from "react";
import { ContainerInputPayment } from "./styles";

interface InputPaymentProps {
  icon: ReactNode;
  name: string;
}

export function InputPayment({ icon, name }: InputPaymentProps){
  return (
    <ContainerInputPayment>
      {icon}
      { name }
    </ContainerInputPayment>
  )
}