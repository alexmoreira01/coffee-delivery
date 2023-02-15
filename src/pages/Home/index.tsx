import { BoxOne, BoxTwo, CoffeeItem, ContainerCoffees, ContainerIntro, Info1, Info2, Info3, Info4, ListCoffes } from "./styles";

import CoffeDelivery from '../../assets/CoffeDelivery.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useState } from "react";

import { coffeesJson } from "../../services/coffees";

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
    <>
      <ContainerIntro>

        <div>

          <BoxOne>
            <header>Encontre o café perfeito para qualquer hora do dia</header>

            <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</p>
          </BoxOne>

          <BoxTwo>
            
            <Info1>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </Info1>

            <Info2>
              <div>
                <Timer size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </Info2>
            <Info3>
              <div>
                <Package size={16}  weight="fill" />
              </div>
              Entrega rápida e rastreada
            </Info3>
            <Info4>
              <div>
              <Coffee size={16} weight="fill" />
              </div>
              O café chega fresquinho até você
            </Info4>

          </BoxTwo>

        </div>
        <img src={CoffeDelivery} alt="" width={476} height={360} />
      </ContainerIntro>

      <ContainerCoffees>
        <header>Nossos cafés</header>

        <ListCoffes>
          {coffees.map(coffee => (
            <CoffeeItem key={coffee.id}>
              <img src={`/coffees/${coffee.img}`} alt="" />

              <span>{coffee.model[0]}</span>

              <h1>{coffee.name}</h1>

              <p>{coffee.description}</p>
            </CoffeeItem>
          ))}
        </ListCoffes>

      </ContainerCoffees>

    </>

  )
}