import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeDelivery from '../../../../assets/CoffeDelivery.svg'

import { Info } from "../../../../components/Infos";

import { ContainerIntro, BoxOne, BoxTwo, Content } from "./style";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();

  return (
    <ContainerIntro>
      <Content>
        <div>
          <BoxOne>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <h3>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</h3>
          </BoxOne>

          <BoxTwo>

            <Info
              icon={<ShoppingCart size={16} weight="fill" />}
              text={"Compra simples e segura"}
              iconColor={colors["yellow-dark"]}
            />

            <Info
              icon={<Timer size={16} weight="fill" />}
              text={"Embalagem mantém o café intacto"}
              iconColor={colors["base-text"]}
            />

            <Info
              icon={<Package size={16} weight="fill" />}
              text={"Entrega rápida e rastreada"}
              iconColor={colors["yellow"]}
            />

            <Info
              icon={<Coffee size={16} weight="fill" />}
              text={"O café chega fresquinho até você"}
              iconColor={colors["purple"]}
            />
          </BoxTwo>
        </div>

        <img src={CoffeDelivery} alt="" width={476} height={360} />
      </Content>
    </ContainerIntro>
  )
}