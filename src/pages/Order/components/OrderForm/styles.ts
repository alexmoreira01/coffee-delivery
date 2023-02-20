import styled from "styled-components";
import { BaseOrderSection } from "../../styles";

export const ContainerOrderForm = styled.div`
  display: flex;
  width: 40rem;

  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: ${(props) => props.theme.textSizes["title-title-xs"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const OrderSectionForm = styled(BaseOrderSection)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;