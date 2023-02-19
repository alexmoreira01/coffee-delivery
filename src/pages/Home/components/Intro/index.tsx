import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ContainerIntro, Info1, Info2, Info3, Info4, BoxOne, BoxTwo, Content, Box } from "./style";

import CoffeDelivery from '../../../../assets/CoffeDelivery.svg'

export function Intro() {
  return (
    <ContainerIntro>

      <Content>

        <Box>


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
                <Package size={16} weight="fill" />
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
        </Box>

        <img src={CoffeDelivery} alt="" width={476} height={360} />
      </Content>
    </ContainerIntro>
  )
}