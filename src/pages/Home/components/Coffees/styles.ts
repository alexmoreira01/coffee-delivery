import styled from "styled-components";

export const ContainerCoffees = styled.main`
  gap: 3.4rem 0rem;

  /* Trocado do default Layout */
  max-width: 90rem;
  padding: 0rem 10rem;
  margin: auto auto;

  h1 {
    font-size: ${(props) => props.theme.textSizes["title-title-l"]};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: bold;
    line-height: 41.6px;
    
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;

export const ListCoffes = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;
  row-gap: 2.5rem;

  margin-top: 3.4rem;
`;
