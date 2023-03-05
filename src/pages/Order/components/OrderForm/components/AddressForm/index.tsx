import { Input } from "../../../../../../components/Input";
import { ContainerAddressForm } from "./styles";

import { useFormContext } from "react-hook-form";

interface ErrorProps {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext();
  
  const { errors } = formState as unknown as ErrorProps

  return (
    <ContainerAddressForm>
      <Input
        placeholder="CEP"
        className="cep"
        type="number"
        {...register("cep")}
        error={errors.cep?.message}
      />

      <Input
        placeholder="Rua"
        className="street"
        {...register("street")} 
        error={errors.street?.message}

      />

      <Input
        placeholder="Número"
        type="number"
        {...register("numberStreet")} 
        error={errors.numberStreet?.message}

      />

      <Input
        placeholder="Complemento" className="complement"
        {...register("complement")} 
        error={errors.complement?.message}
        rightText="Opcional"

      />

      <Input placeholder="Bairro"
        {...register("neighborhood")}
        error={errors.neighborhood?.message}
      
      />

      <Input
        placeholder="Cidade"
        {...register("city")} 
        error={errors.city?.message}
      
      />

      <Input
        placeholder="Uf"
        {...register("uf")} 
        error={errors.uf?.message}
      
      />


    </ContainerAddressForm>
  )
}