import styled from "styled-components";

export const ContainerFormTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme.textSizes["text-regular-m"]};

    font-family: ${(props) => props.theme.fonts.regular};
  }

  h3 {
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: ${(props) => props.theme.textSizes["text-regular-s"]};

    font-family: ${(props) => props.theme.fonts.regular};
  }

`;