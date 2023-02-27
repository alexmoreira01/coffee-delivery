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

        {cartCoffeesItems.map(coffeeCart => (
          <CoffeesCart
            key={coffeeCart.id}
            id={coffeeCart.id}
            name={coffeeCart.name} 
            img={coffeeCart.img} 
            model={[]} 
            description={""}          
            price={coffeeCart.price} 
            quantity={0} 
          />

          // <span key={`${coffee.id}-${model}`}>{model.toUpperCase()}</span> 
        ))}

        {/* <CoffeesCart/> */}
        {/* <CoffeesCart/> */}

        <CoffeesConfirmation/>

      </ContainerDetails>
    </ContainerCoffeesSelected>
  )
}