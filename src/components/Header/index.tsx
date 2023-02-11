import { CartButton, HeaderContainer, LocationButton } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react';

import Logo from '../../assets/Logo.svg';
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <nav>
        <LocationButton>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        <NavLink to="/cart" title="Carrinho"  >
          <CartButton>
            <ShoppingCart size={24} weight="fill" />
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}