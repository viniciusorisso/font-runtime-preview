import { ChangeEvent, useState } from "react";
import { changeCurrentFont, changeCurrentWeight, changeToCustomFont, fontsList } from "../font-utils";
import SelectComponent from "../select";
import "./style.css";

type TComponentProps = {
  label: string;
  fontIdString: string;
};

const FormGroup = ({ label, fontIdString }: TComponentProps) => {
  const [currentFont, setCurrentFont] = useState(-1);

  const handleChangeUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setCurrentFont(-1);
    changeToCustomFont(file, fontIdString);
  };

  const handleChangeFont = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;

    changeCurrentFont(selected, fontIdString);

    const index = fontsList.map((el) => el.family).indexOf(selected);
    
    setCurrentFont(() => index ?? 0);

    const node = document.getElementById("file-input");

    if (node?.value) {
      node.value = "";
    }
  };

  const handleChangeWeight = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;

    changeCurrentWeight(selected, currentFont, fontIdString);
  };

  const handleLineHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value || "1";

    if (+value < 0) {
      value = "1";
    }
    else if (+value > 80) {
      value = "80";
    }

    const node = document.getElementById("preview-container-id");
    node?.style.setProperty(`--variable-font-${fontIdString}-line-heigth`, value);
  };

  const handleLetterSpaceChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value || "0";

    if (+value <= -10) {
      value = "-10";
    }
    else if (+value > 40) {
      value = "40";
    }

    const node = document.getElementById("preview-container-id");
    node?.style.setProperty(`--variable-font-${fontIdString}-letter-space`, value + "px");
  };

  const handleFontSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value || "16";

    if (+value <= 0) {
      value = "1";
    }
    else if (+value > 120) {
      value = "120";
    }

    const node = document.getElementById("preview-container-id");
    node?.style.setProperty(`--variable-font-${fontIdString}-font-size`, value + "px");
  };

  return (
    <div className="font-group">
      <label htmlFor={fontIdString}>{label}</label>
      <SelectComponent list={fontsList.map(el => ({name: el.family}))} onChange={handleChangeFont} clearSelect={currentFont === -1} />
      {currentFont >= 0 && <SelectComponent list={fontsList[currentFont].variants.map(el => ({ name: el}))} onChange={handleChangeWeight} selected={currentFont >= 0} /> }
      <div className="input-group">
        <label htmlFor="size">Font size</label>
        <input type="number" name="size" placeholder="Value from 1 to 120" onChange={handleFontSizeChange} />
      </div>
      <div className="input-group">
        <label htmlFor="line">Line Height</label>
        <input type="number" name="line" placeholder="Value from 0 to 80" onChange={handleLineHeightChange} />
      </div>
      <div className="input-group">
        <label htmlFor="spacing">Letter Spacing</label>
        <input type="number" name="spacing" placeholder="Value from -10 to 40" onChange={handleLetterSpaceChange} />
      </div>
      <div className="input-group">
        <label htmlFor="spacing">Custom Upload</label>
        <input type="file" id="file-input" accept=".ttf, .woff2" onChange={handleChangeUpload} />
      </div>
    </div>
  )
};

export default FormGroup;
