import styled from "styled-components";

export const ContainerCoffeesConfirmation = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  div {
    display: flex;

    align-items: center;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme.colors["base-text"]};

      font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
    }

    span {
      color: ${(props) => props.theme.colors["base-text"]};

      font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
    }
  }
`;

export const CoffeesConfirmationTotal = styled.div`
  p {
    color: ${(props) => props.theme.colors["base-subtitle"]};

    font-size: ${(props) => props.theme.textSizes["text-regular-l"]} !important;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme.colors["base-subtitle"]};

    font-size: ${(props) => props.theme.textSizes["text-regular-l"]} !important;
    font-weight: 700;
  }
`;