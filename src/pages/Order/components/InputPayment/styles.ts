import styled from "styled-components";

export const ContainerInputPayment = styled.div`
  display: flex;
  height: 3rem;

  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;
  padding: 0 1rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  border: 1px solid ${(props) => props.theme.colors["base-button"]};;
  border-radius: 6px;

  background: ${(props) => props.theme.colors["base-button"]};
  color: ${(props) => props.theme.colors["base-text"]};

  transition: 0.3s;

  svg {
    color: ${(props) => props.theme.colors["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme.colors["base-hover"]};
  }

  user-select: none;
  cursor: pointer;
`;