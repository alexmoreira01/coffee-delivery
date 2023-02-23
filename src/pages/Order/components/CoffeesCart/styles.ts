import styled from "styled-components";

export const ContainerCoffeesCart = styled.div`
  display: flex;
  width: 100%;
  
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;

    align-items: center;

    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;

export const ContainerActions = styled.div`
  p {
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const ContainerActionsContent = styled.div`
  display: flex;
  height: 2rem;

  align-items: center;

  gap: 0.5rem;
  margin-top: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }

`;

export const ButtonRemove = styled.button`
  display: flex;
  height: 100%;

  align-items: center;

  gap: 0.25rem;
  padding: 0 0.5rem;

  border: none;
  border-radius: 6px;

  font-size: 0.75rem;

  background: ${(props) => props.theme.colors["base-button"]};
  color: ${(props) => props.theme.colors["base-text"]};

  transition: 0.3s;

  svg {
    color: ${(props) => props.theme.colors["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme.colors["base-hover"]};
  }

  `;