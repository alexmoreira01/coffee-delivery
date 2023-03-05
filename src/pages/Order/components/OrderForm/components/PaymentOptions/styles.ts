import styled from "styled-components";

export const ContainerPaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    
    margin-top: 2px;
    
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: start;

    color: ${(props) => props.theme.colors["base-error"]};
  }
`;