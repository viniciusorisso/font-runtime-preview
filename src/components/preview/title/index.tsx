import { ReactNode } from "react";
import "./style.css"

type TComponentProps = {
  children: ReactNode;
}

const TitleComponent = ({ children }: TComponentProps) => {
  return <h3 className="title-font">{ children }</h3>
};

export default TitleComponent;
