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
  removeCoffeeCart: (coffeeId: number) => void;
  addCoffeeQuantity: (coffeeId: number) => void;
  removeCoffeeQuantity: (coffeeId: number) => void;
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
    const newCoffeesCart = produce(cartCoffeesItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(data)
        // setCartCoffeesItems(cartCoffeesItems)
      }else {
        draft[coffeeAlreadyExists].quantity += data.quantity
      }
    })
    
    setCartCoffeesItems(newCoffeesCart)
  }

  function removeCoffeeCart(coffeeId: number){
    const coffeeAlreadyExists = cartCoffeesItems.findIndex((coffee) => {
      return coffee.id === coffeeId
    });

    if (coffeeAlreadyExists < 0) {
      return;
    }

    const newCoffeesCart = produce(cartCoffeesItems, (draft) => {
      draft.splice(coffeeAlreadyExists, 1);
    })
    
    setCartCoffeesItems(newCoffeesCart)
  }

  function addCoffeeQuantity(coffeeId: number) {
    const coffeeAlreadyExists = cartCoffeesItems.findIndex((coffee) => {
      return coffee.id === coffeeId;
    })

    const newCoffeesCart = produce(cartCoffeesItems, (draft) => {
      draft[coffeeAlreadyExists].quantity += 1;
    })

    setCartCoffeesItems(newCoffeesCart)
  }

  function removeCoffeeQuantity(coffeeId: number) {
    const coffeeAlreadyExists = cartCoffeesItems.findIndex((coffee) => {
      return coffee.id === coffeeId;
    })

    const newCoffeesCart = produce(cartCoffeesItems, (draft) => {
      if(draft[coffeeAlreadyExists].quantity === 1) {
        draft[coffeeAlreadyExists].quantity = 1
      } else {
        draft[coffeeAlreadyExists].quantity -= 1;
      }
    })

    setCartCoffeesItems(newCoffeesCart)
  }
  
  return (
    <CoffeeCartContext.Provider
      value={{
        cartCoffeesItems,

        addCoffeesCart,
        removeCoffeeCart,
        addCoffeeQuantity,
        removeCoffeeQuantity
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}