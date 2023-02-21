import { ReactNode } from "react";
import { ContainerFormTitle } from "./styles";

interface TitleFormProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function TitleForm({ title, subtitle, icon }: TitleFormProps) {
  return (
    <ContainerFormTitle>
      {icon}
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>

    </ContainerFormTitle>
  )
}