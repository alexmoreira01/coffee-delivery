import { HeaderContainer, HeaderButton } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react';

import Logo from '../../assets/Logo.svg';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeCartContext } from "../../contexts/useCoffees";

export function Header() {
  const { cartCoffeesItems } = useContext(CoffeeCartContext);
  
  return (
    <HeaderContainer>
      <div className="divContainer">

        <NavLink to="/" title="Home">
          <img src={Logo} alt="" />
        </NavLink>

        <nav>
          <HeaderButton variant="purple" >
            <MapPin size={24} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/cart" title="Carrinho">

            <HeaderButton variant="yellow">
              {cartCoffeesItems.length > 0 ? <span>{cartCoffeesItems.length}</span> : ''}
              <ShoppingCart size={24} weight="fill" />
            </HeaderButton>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}