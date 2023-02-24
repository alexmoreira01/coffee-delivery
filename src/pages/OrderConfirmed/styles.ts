import styled from "styled-components";

export const ContainerOrderConfirmed = styled.div`
  display: flex;

  flex-direction: column;
  
  gap: 2.5rem;
  margin-top: 5rem;

  > div {
    h1 {
      color: ${(props) => props.theme.colors["yellow-dark"]};

      font-size: ${(props) => props.theme.textSizes["title-title-l"]};
      font-family: ${(props) => props.theme.fonts.title};
    }

    p {
      color: ${(props) => props.theme.colors["base-subtitle"]};

      font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
      font-family: ${(props) => props.theme.fonts.regular};
    }
  }

  section {
    display: flex;

    align-items: center;
    justify-content: space-between;
  }
`;

export const ContainerOrdeContent = styled.div`
  display: flex;
  min-width: 32rem;

  flex-direction: column;

  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px 36px;

  background: ${(props) => props.theme.colors["background"]};

  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px; // Borda de um px => Largura da borda
    z-index: -1;

    /* Colocar o border radius, adicionando o tamanho da border, no caso 1 px */
    border-radius: 7px 37px;

    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }

`;