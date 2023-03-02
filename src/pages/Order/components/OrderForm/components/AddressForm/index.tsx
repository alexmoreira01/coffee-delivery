import { Input } from "../../../../../../components/Input";
import { ContainerAddressForm } from "./styles";

import { useFormContext } from "react-hook-form";

export function AddressForm() {
  const { register } = useFormContext();

  return (
    <ContainerAddressForm>
      <Input
        placeholder="CEP"
        className="cep"
        type="number"
        {...register("cep")}
      />

      <Input
        placeholder="Rua"
        className="street"
        {...register("street")} 
      />

      <Input
        placeholder="Número"
        type="number"
        {...register("numberStreet")} 
      />

      <Input
        placeholder="Complemento" className="complement"
        {...register("complement")} 
      />

      <Input placeholder="Bairro"
        {...register("neighborhood")}
      />

      <Input
        placeholder="Cidade"
        {...register("city")} 
      />

      <Input
        placeholder="Uf"
        {...register("uf")} 
      />


    </ContainerAddressForm>
  )
}