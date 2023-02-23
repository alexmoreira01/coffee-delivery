import { CoffeesCart } from "../CoffeesCart";
import { CoffeesConfirmation } from "./components/CoffeesConfirmation";
import { ContainerCoffeesSelected, ContainerDetails } from "./styles";

export function CoffeesSelected(){
  return (
    <ContainerCoffeesSelected>
      <h1>Cafés selecionados</h1>

      <ContainerDetails>

        <CoffeesCart/>
        <CoffeesCart/>

        <CoffeesConfirmation/>

      </ContainerDetails>
    </ContainerCoffeesSelected>
  )
}