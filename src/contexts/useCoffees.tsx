import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeItem";

export interface CartCoffeeItem extends Coffee {
  quantity: number;
}

interface CoffeeCartContextData {
  // coffeesItems: CoffeesItems[];
  cartCoffeesItems: CartCoffeeItem[];

  addCoffeesCart: (data: CartCoffeeItem) => void;
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextData);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeeCartContextProvider({children}: CoffeesContextProviderProps) {
  const [cartCoffeesItems, setCartCoffeesItems] = useState<CartCoffeeItem[]>([])

  function addCoffeesCart(data: CartCoffeeItem){
    const coffeeAlreadyExists = cartCoffeesItems.findIndex((coffee) => {
      return coffee.id === data.id
    });

    // Criando a alteração para o estado sem se preocupar com a imutabilidade
    const newCoffee = produce(cartCoffeesItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(data)
        // setCartCoffeesItems(cartCoffeesItems)
      }else {
        draft[coffeeAlreadyExists].quantity += data.quantity
      }
    })
    
    setCartCoffeesItems(newCoffee)
  }

  console.log(cartCoffeesItems)

  return (
    <CoffeeCartContext.Provider
      value={{
        cartCoffeesItems,

        addCoffeesCart
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}