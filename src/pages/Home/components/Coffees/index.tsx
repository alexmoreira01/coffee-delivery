import { useState } from "react";
import { ContainerCoffees, ListCoffes } from "./styles";

import { coffeesJson } from "../../../../services/coffees";
import { CoffeeItem } from "../CoffeItem";

interface CoffeeProps {
  id: number;
  name: string;
  img: string;
  price: number;
  model: Array<string>;
  description: string;
}

export function Coffees() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>(coffeesJson);

  return (
    <ContainerCoffees className="divContainer">
      <h1>Nossos cafés</h1>

      <ListCoffes>
        {coffees.map(coffee => (
          <CoffeeItem
            coffee={coffee}
          />
        ))}
      </ListCoffes>

    </ContainerCoffees>
  )

}