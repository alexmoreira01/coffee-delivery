import { CounterInput } from "../../../../components/CounterInput";
import { CoffeeItemContent, Tag, CoffeeItemFooter, AddCounter } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { FormartValue } from "../../../../utils/formatValue";

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
  const formattedValue = FormartValue(coffee.price);

  return (
    
      <CoffeeItemContent key={coffee.id}>
        <img src={`/coffees/${coffee.img}`} alt="" />

        <Tag>
          {coffee.model.map(model => (
            <span key={`${coffee.id}-${model}`}>{model.toUpperCase()}</span> 
          ))}
          {/* <span>{coffee.model[0].toUpperCase()}</span> */}
          {/* {coffee.model[1] ? <span>{coffee.model[1].toUpperCase()}</span> : ''} */}
        </Tag>

        <h1>{coffee.name}</h1>

        <p>{coffee.description}</p>

        <CoffeeItemFooter>
          <div>
            <p>R$</p>
            <span><strong>{formattedValue}</strong></span>

          </div>

          <AddCounter>
            <CounterInput/>

            <button>
              <ShoppingCart size={22} weight="fill" />

            </button>

          </AddCounter>

        </CoffeeItemFooter>

      </CoffeeItemContent>
    
  )
}