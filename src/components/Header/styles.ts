import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  /* Trocado do default Layout
  max-width: 90rem;
  padding: 2rem 10rem;
  margin: auto auto; */

  background: ${(props) => props.theme.colors["background"]};

  /* padding: 2rem 0rem; */

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 2.3rem;
  min-width: 2.3rem;

  padding: 0 0.5rem;

  border: none;
  border-radius: 6px;

  font-size: ${(props) => props.theme.textSizes["text-regular-s"]};

  span {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;

    align-items: center;
    justify-content: center;
    position: absolute;

    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: 700;

    /* Metade do valor total da altura e largura */
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    color: ${(props) => props.theme.colors["white"]};
  }

  background-color: ${(props) => props.theme.colors[`${props.variant}-light`]};
  color: ${(props) => props.variant === "purple" ? 
    props.theme.colors[`${props.variant}`] : 
    props.theme.colors[`${props.variant}-dark`]};

    span {
      background-color: ${(props) => props.theme.colors[`${props.variant}-dark`]};
    }

  /* 
    Outros metodos
    ${({ variant, theme }) => css`
      background: ${theme.colors[`${variant}-light`]};
      color: ${theme.colors[`${variant}-dark`]};
    `} 
    
    ${({ variant, theme }) => 
      variant === "purple" &&
      css`
        svg {
          color: ${theme.colors[`${variant}`]};
        }
    `}
  */
`;

// const BaseButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   height: 2.3rem;
//   min-width: 2.3rem;

//   padding: 0 0.5rem;

//   border: none;
//   border-radius: 6px;

//   font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
// `;

// export const CartButton = styled(BaseButton)`
//   background-color: ${(props) => props.theme.colors["yellow-light"]};

//   color: ${(props) => props.theme.colors["yellow-dark"]};
// `;

// export const LocationButton = styled(BaseButton)`
//   gap: 4px;

//   background-color: ${(props) => props.theme.colors["purple-light"]};
//   color: ${(props) => props.theme.colors["purple-dark"]};
// `;