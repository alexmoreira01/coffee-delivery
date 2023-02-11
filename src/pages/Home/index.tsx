// import { HeaderContainer } from "./styles";

import { ContainerIntro } from "./styles";

import CoffeDelivery from '../../assets/CoffeDelivery.svg'

export function Home() {
    return(
        <ContainerIntro>

            <div>

            <header>Encontre o café perfeito para qualquer hora do dia</header>

            <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br/> qualquer hora</p>
            
            </div>

            <img src={CoffeDelivery} alt="" width={476} height={360} />
        </ContainerIntro>
    )
}