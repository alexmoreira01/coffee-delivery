import styled from "styled-components";

export const ContainerButton = styled.button`
  padding: 0.75rem 2.8rem;
  margin-top: 0.7rem;

  border: none;
  border-radius: 6px;
  line-height: 1.3rem;

  font-size: ${(props) => props.theme.textSizes["components-button-g"]};
  font-weight: 700;

  background: ${(props) => props.theme.colors["yellow"]};
  color: ${(props) => props.theme.colors["white"]};

  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["yellow-dark"]};
  }
`;