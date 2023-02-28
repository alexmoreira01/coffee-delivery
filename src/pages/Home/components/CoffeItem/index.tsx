import { CounterInput } from "../../../../components/CounterInput";
import { CoffeeItemContent, Tag, CoffeeItemFooter, AddCounter } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { FormartValue } from "../../../../utils/formatValue";
import { useContext, useState } from "react";
import { CoffeeCartContext } from "../../../../contexts/useCoffees";

export interface Coffee {
  id: number;
  name: string;
  img: string;
  price: number;
  model: Array<string>;
  description: string;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeItem({ coffee }: CoffeeProps) {
  const { cartCoffeesItems, addCoffeesCart } = useContext(CoffeeCartContext);
  const [quantity, setQuantity] = useState(0);
  
  const formattedValue = FormartValue(coffee.price);

  function addCoffeeQuantity() {
    setQuantity((state) => state + 1)
  }

  function removeCoffeeQuantity() {
    if(quantity === 0) {
      setQuantity((state) => 0)
    } else {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddCoffeesCart() {
    // Adicionando todos os dados do coffee com a quantidade
    const dataAdd = {
      ...coffee,
      quantity: quantity
    }
    addCoffeesCart(dataAdd)
  }
  
  return (
    
      <CoffeeItemContent key={coffee.id}>
        <img src={`/coffees/${coffee.img}`} alt="" />

        <Tag>
          {coffee.model.map(model => (
            <span key={`${coffee.id}-${model}`}>{model.toUpperCase()}</span> 
          ))}
        </Tag>

        <h1>{coffee.name}</h1>

        <p>{coffee.description}</p>

        <CoffeeItemFooter>
          <div>
            <p>R$</p>
            <span><strong>{formattedValue}</strong></span>

          </div>

          <AddCounter>
            <CounterInput
              quantity={quantity}
              onAddCoffeeQuantity={addCoffeeQuantity}
              onRemoveCoffeeQuantity={removeCoffeeQuantity}
            />

            <button disabled={quantity === 0 ? true : false} onClick={handleAddCoffeesCart}>
              <ShoppingCart size={22} weight="fill" />

            </button>

          </AddCounter>

        </CoffeeItemFooter>

      </CoffeeItemContent>
    
  )
}