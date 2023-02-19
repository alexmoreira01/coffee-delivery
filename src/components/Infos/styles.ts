import styled from "styled-components";

export const ContainerInfo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  gap: 0.75rem;
`;

interface ContainerIconProps {
  iconColor: string;
}

export const ContainerIcon = styled.div<ContainerIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  background: ${(props) => props.iconColor};
  color: ${(props) => props.theme.colors["white"]};

  font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
  font-weight: 400;
  line-height: 20.8px;
`;