import { ContainerHome } from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { Intro } from "./components/Intro";
import { Coffees } from "./components/Coffees";

export function Home() {

  return (
    <ContainerHome>
      
      <Intro/>

      <Coffees/>

    </ContainerHome>
  )
}