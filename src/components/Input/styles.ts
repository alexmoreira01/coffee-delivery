import styled, { css } from "styled-components";

export const InputErrorMessage = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    margin-top: 2px;
    /* margin-bottom: 33px; */
    
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    
    font-size: 14px;
    font-weight: 400;
    /* line-height: 18px; */
    letter-spacing: 0em;
    text-align: start;

    color: ${(props) => props.theme.colors["base-error"]};
  }
  `;

interface ContainerInputProps {
  hasError: boolean
}

export const ContainerInput = styled.div<ContainerInputProps>`
  display: flex;
  height: 2.625rem;
  
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};

  background: 1px solid ${(props) => props.theme.colors["base-input"]};

  transition: 0.3s;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  ${(props) => props.hasError ? css`
    border-color: ${(props) => props.theme.colors["base-error"]};
  ` : ''}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;

  border: none;
  padding: 0 0.75rem;

  color: ${(props) => props.theme.colors["base-text"]};
  background: none;
  
  font-size: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors["base-label"]}
`;
