import { ContainerOrdeContent, ContainerOrderConfirmed } from "./styles";

import ConfirmedImg from '../../assets/Confirmed.svg';
import { Info } from "../../components/Infos";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { NewOrderFormData } from "../Order";
import { paymentMethods } from "../Order/components/OrderForm/components/PaymentOptions";
import { useEffect } from "react";

interface LocationProps {
  state: NewOrderFormData 
}

export function OrderConfirmed() {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const { state } = useLocation() as unknown as LocationProps;

  useEffect(() => {
    if(!state) {
      navigate('/')
    }
  }, [])

  if(!state) return <></>;

  console.log(state)

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
                Entrega em <strong>{state.street}, {state.numberStreet}</strong> 
                <br/> {state.neighborhood} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.payment].label}</strong>
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