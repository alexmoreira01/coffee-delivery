import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";
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

  totalPriceCart: number;
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextData);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeeCartContextProvider({children}: CoffeesContextProviderProps) {
  const [cartCoffeesItems, setCartCoffeesItems] = useState<CartCoffeeItem[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffee-delivery:coffees-state-1.0.0"
    );

    if(storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    } else {
      return []
    }

  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartCoffeesItems);

    localStorage.setItem("@coffee-delivery:coffees-state-1.0.0", stateJSON);
  }, [cartCoffeesItems])

  // const totalPriceCart = cartCoffeesItems.reduce(
  //   // Accumulator = 0 // currentValue igual ao objeto do array // 0 valor no qual começa
  //   (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0
  // );

  const totalPriceCart = cartCoffeesItems.reduce(
    (accumulator, currentValue) => {
      return accumulator + (currentValue.price * currentValue.quantity);
    }, 0
  );

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

  function calcTotalPrice() {
    let totalPrice = 0;

    cartCoffeesItems.map(coffeeItem => {
      totalPrice = totalPrice + (coffeeItem.price * coffeeItem.quantity);
    })

    return totalPrice;
  }
  
  return (
    <CoffeeCartContext.Provider
      value={{
        cartCoffeesItems,

        addCoffeesCart,
        removeCoffeeCart,
        addCoffeeQuantity,
        removeCoffeeQuantity,

        totalPriceCart
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}