import { ReactNode } from "react";
import { ContainerIcon, ContainerInfo } from "./styles";

interface InfoProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconColor: string;
}

export function Info({ icon, text, iconColor }:InfoProps ) {
  return (
    <ContainerInfo>
      <ContainerIcon iconColor={iconColor} >
        {icon}
      </ContainerIcon>
      {typeof text === "string" ? <p>{text}</p> : text}
    </ContainerInfo>
  )
}