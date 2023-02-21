import styled from "styled-components";

export const ContainerInput = styled.input`
  height: 2.625rem;

  font-size: 0.75rem;
  
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};

  padding: 0 0.75rem;

  background: 1px solid ${(props) => props.theme.colors["base-input"]};
  color: ${(props) => props.theme.colors["base-text"]};

  transition: 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;