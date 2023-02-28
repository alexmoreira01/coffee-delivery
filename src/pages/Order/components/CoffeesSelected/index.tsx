import { useContext } from "react";
import { CoffeeCartContext } from "../../../../contexts/useCoffees";
import { CoffeesCart } from "../CoffeesCart";
import { CoffeesConfirmation } from "./components/CoffeesConfirmation";
import { ContainerCoffeesSelected, ContainerDetails } from "./styles";

export function CoffeesSelected(){
  const { cartCoffeesItems } = useContext(CoffeeCartContext);

  console.log(cartCoffeesItems)

  return (
    <ContainerCoffeesSelected>
      <h1>Cafés selecionados</h1>

      <ContainerDetails>


        {
          cartCoffeesItems.length > 0 ? 
          <>

            {cartCoffeesItems.map(coffeeCart => (
              <CoffeesCart
                key={coffeeCart.id}
                coffee={coffeeCart}
              />
            ))}

            <CoffeesConfirmation/>
          </> 
          :
          'Sem items no carrinho '
        }

        {/* <CoffeesConfirmation/> */}

      </ContainerDetails>
    </ContainerCoffeesSelected>
  )
}