import { CoffeesSelected } from "./components/CoffeesSelected";
import { Orderform } from "./components/OrderForm";
import { ContainerOrder } from "./styles";

import { useForm, FormProvider } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CoffeeCartContext } from "../../contexts/useCoffees";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money"
}

const newCartOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe o CEP do local!"),
  street: zod.string().min(25, "Informe a Rua do local!"),
  numberStreet: zod.string().min(2, "Informe o número!"),
  complement: zod.string().max(255, "O complemento deve ter até 255 caracteres!"),
  neighborhood: zod.string().min(5, "Informe o bairro!"),
  city: zod.string().min(5, "Informe a cidade!"),
  uf: zod.string().max(2, "Informe a UF!"),
  payment: zod.nativeEnum(PaymentMethods, {
    errorMap:() => {
      return { message: "Informe o método de pagamento"}
    }
  })
})

export type NewOrderFormData = zod.infer<typeof newCartOrderFormValidationSchema>;

export function Order() {
  const { removeDeliveryLocalStorage } = useContext(CoffeeCartContext);

  const cartOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newCartOrderFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      numberStreet: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    }
  });

  const { handleSubmit, watch, reset } = cartOrderForm;

  const navigate = useNavigate();

  function handleNewOrderForm(data: NewOrderFormData) {
    navigate("/cart/confirmed", {
      state: data
    })
    removeDeliveryLocalStorage()
    reset();
  }

  return (
    <FormProvider {...cartOrderForm}>

      {/* Aqui começa o formulario / o botao submit esta na guia dos vafes selecionados  */}
      <ContainerOrder className="divContainer" onSubmit={handleSubmit(handleNewOrderForm)}>
        <Orderform />

        <CoffeesSelected />

      </ContainerOrder>
    </FormProvider>
  )
}