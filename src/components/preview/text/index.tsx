import { ReactNode } from "react";
import "./style.css"

type TComponentProps = {
  children: ReactNode;
}

const TextComponent = ({ children }: TComponentProps) => {
  return <p className="text-font">{ children }</p>
};

export default TextComponent;
