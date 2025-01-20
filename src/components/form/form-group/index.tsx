import { useState } from "react";
import { changeCurrentFont, changeCurrentWeight, fontsList } from "../font-utils";
import SelectComponent from "../select";

type TComponentProps = {
  label: string;
  fontIdString: string;
};

const FormGroup = ({ label, fontIdString }: TComponentProps) => {
  const [currentFont, setCurrentFont] = useState(0);

  const handleChangeUpload = (event) => {
    const file = event.target.files[0]
    const font = "Inter"

    const node = document.getElementById("preview-container-id");
    node?.style.setProperty(`--variable-font-${fontIdString}`, `${font}, sans-serif`);
  };

  const handleChangeFont = (event) => {
    const selected = event.target.value;

    changeCurrentFont(selected, fontIdString);

    const index = fontsList.map((el) => el.family).indexOf(selected);
    
    setCurrentFont(() => index ?? 0);
  };

  const handleChangeWeight = (event) => {
    const selected = event.target.value;

    changeCurrentWeight(selected, currentFont, fontIdString);
  };

  return (
    <div className="font-group">
      <label htmlFor={fontIdString}>{label}</label>
      <SelectComponent list={fontsList.map(el => ({name: el.family}))} onChange={handleChangeFont} />
      {currentFont && <SelectComponent list={fontsList[currentFont].variants.map(el => ({ name: el}))} onChange={handleChangeWeight} /> }
      <input type="file" name="" id={fontIdString} accept=".ttf, .woff2" onChange={handleChangeUpload} />
    </div>
  )
};

export default FormGroup;
