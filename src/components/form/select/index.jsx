import { useState } from "react";
import "./style.css";
import { useEffect } from "react";

const SelectComponent = ({ onChange, list, selected, clearSelect }) => {
  const [currentValue, setCurrentValue] = useState(selected ? list[0].name : "");

  const handleOnChange = (event) => {
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
        list.map((element) => <option key={element.name} value={element.name}>{element.name}</option>)
      }
    </select>
};

export default SelectComponent;
