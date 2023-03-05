import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { ContainerInputPayment, ContainerInputPaymentContent } from "./styles";

type InputPaymentProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export const InputPayment = forwardRef<HTMLInputElement, InputPaymentProps>(({ id, icon, label, ...props }, ref) => {
  return(
    <ContainerInputPayment>
      <input id={id} type="radio" {...props} name="payment" ref={ref} />
      <label htmlFor={id}>
        <ContainerInputPaymentContent>
          {icon}
          {label}
        </ContainerInputPaymentContent>
      </label>
    </ContainerInputPayment>
  )
})

// export function InputPayment({ id, icon, name, ...props }: InputPaymentProps) {
//   return (
//     <ContainerInputPayment>
//       <input id={id} type="radio" {...props} name="paymentMethod" />
//       <label htmlFor={id}>
//         <ContainerInputPaymentContent>
//           {icon}
//           {name}
//         </ContainerInputPaymentContent> 
//       </label>
//     </ContainerInputPayment>
//   )
// }