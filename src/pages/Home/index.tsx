import { CoffeeItem, ContainerCoffees, ContainerHome, ListCoffes, Tag } from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useState } from "react";

import { coffeesJson } from "../../services/coffees";
import { Intro } from "./components/Intro";

interface Coffee {
  id: number;
  name: string;
  img: string;
  price: number;
  model: Array<string>;
  description: string;
}

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesJson);


  console.log(coffees)

  return (
    <ContainerHome>
      
      <Intro/>

      <ContainerCoffees>
        <header>Nossos cafés</header>

        <ListCoffes>
          {coffees.map(coffee => (
            <CoffeeItem key={coffee.id}>
              <img src={`/coffees/${coffee.img}`} alt="" />

              <Tag>
                <span>{coffee.model[0].toUpperCase()}</span>
                {coffee.model[1] ? <span>{coffee.model[1].toUpperCase()}</span> : '' }
              </Tag>  

              <h1>{coffee.name}</h1>

              <p>{coffee.description}</p>

              <span>R$ {coffee.price}</span>
            </CoffeeItem>
          ))}
        </ListCoffes>

      </ContainerCoffees>

    </ContainerHome>

  )
}