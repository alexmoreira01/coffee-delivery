import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;

  nav {
    display: flex;
    gap: 12px;
  }
`

const BaseButton = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
`;

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["yellow-light"]};

  color: ${(props) => props.theme["yellow-dark"]};
`;

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["purple-light"]};

  gap: 4px;

  color: ${(props) => props.theme["purple-dark"]};
`;