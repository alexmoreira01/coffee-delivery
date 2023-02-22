import { CoffeesSelected } from "./components/CoffeesSelected";
import { Orderform } from "./components/OrderForm";
import { ContainerOrder } from "./styles";


export function Order() {
  return (
    <ContainerOrder className="divContainer">
      <Orderform />

      <CoffeesSelected/>

    </ContainerOrder>
  )
}