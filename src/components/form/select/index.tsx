import { ChangeEvent, useState } from "react";
import "./style.css";
import { useEffect } from "react";


type TComponentProps = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  list: Array<{ name: string }>;
  selected?: boolean;
  clearSelect?: boolean;
};

const SelectComponent = ({ onChange, list, selected, clearSelect }: TComponentProps) => {
  const [currentValue, setCurrentValue] = useState(selected ? list[0].name : "");

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(event.target.value);

    onChange(event);
  };

  useEffect(() => {
    setCurrentValue(selected ? list[0].name : "");
  },[selected]);

  useEffect(() => {
    if (clearSelect) {
      setCurrentValue("");
    }
  }, [clearSelect]);

  return <select value={currentValue} className="select-component" onChange={handleOnChange}>
      <option disabled value=""> -- Select an option -- </option>
      {
        list.map((element: { name: string }) => <option key={element.name} value={element.name}>{element.name}</option>)
      }
    </select>
};

export default SelectComponent;
