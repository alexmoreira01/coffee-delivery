import { Input } from "../../../../components/Input";
import { ContainerAddressForm } from "./styles";

export function AddressForm() {
  return (
    <ContainerAddressForm>
      <Input placeholder="CEP" className="cep" type="number" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complamento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="Uf" />

    </ContainerAddressForm>
  )
}