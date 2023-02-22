import styled from "styled-components";

export const ContainerAddressForm = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: danse;

  .cep {
    /* Ocupar a linha inteira -- span === expandir -- 3 e porque so se tem 3 colunas logo ocupara o espaço das 3*/
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;