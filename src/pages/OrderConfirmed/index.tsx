import { ContainerOrdeContent, ContainerOrderConfirmed } from "./styles";

import ConfirmedImg from '../../assets/Confirmed.svg';
import { Info } from "../../components/Infos";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmed() {
  const { colors } = useTheme();

  return(
    <ContainerOrderConfirmed className="divContainer">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <ContainerOrdeContent>
  
          <Info
            text={
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong> 
                <br/> Farrapos - Porto Alegre, RS
              </p>
            }
            icon={<MapPin width="fill" />}
            iconColor={colors["purple"]}
          />

          <Info
            text={
              <p>
                Previsão de entraga
                <br/>
                <strong>20 min - 30 min</strong>
              </p>
            }
            icon={<Clock width="fill" />}
            iconColor={colors["yellow"]}
          />

          <Info
            text={
              <p>
                Pagamento na entraga
                <br/>
                <strong>Cartão de Crédito</strong>
              </p>
            }
            icon={<CurrencyDollar width="fill" />}
            iconColor={colors["yellow"]}
          />
        </ContainerOrdeContent>

        <img src={ConfirmedImg}/>
      </section>
    </ContainerOrderConfirmed>
  )
}