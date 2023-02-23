import styled, { css } from "styled-components";

interface ContainerCounterInputProps {
  size?: "medium" | "small"; 
}

export const ContainerCounterInput = styled.div<ContainerCounterInputProps>`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme.colors["base-button"]};

  input {
    width: 100%;
    text-align: center;
    
    border: none;

    background: none;
    color: ${(props) => props.theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  /* ${(props) => props.size === "medium" ? 
  css`
    padding: 0.5rem;
  ` 
  :  
  css`
    padding: 0.3rem 0.5rem;
  ` 
  } */

  ${(props) => props.size === "medium" && 
  css`
    padding: 0.5rem;
  ` }

  ${(props) => props.size === "medium" && 
  css`
    padding: 0.3rem 0.5rem;
  ` }
`;

export const ButtonIcon = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;

  border: none;
  
  background: none;
  color: ${(props) => props.theme.colors["purple"]};

  transition: 0.4;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors["purple-dark"]};
    
  }

`;