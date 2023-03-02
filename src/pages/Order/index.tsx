import { CoffeesSelected } from "./components/CoffeesSelected";
import { Orderform } from "./components/OrderForm";
import { ContainerOrder } from "./styles";

import { useForm, FormProvider } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newCartOrderFormValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  numberStreet: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string()
})

type NewOrderFormData = zod.infer<typeof newCartOrderFormValidationSchema>;

export function Order() {

  const cartOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newCartOrderFormValidationSchema),
    // defaultValues: {

    // }
  });

  const { handleSubmit, watch, reset } = cartOrderForm;

  function handleNewOrderForm(data: NewOrderFormData) {
    console.log(data)
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