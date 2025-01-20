import { GOOGLE_FONTS_LIST } from "./select/fonts";

const fonts = GOOGLE_FONTS_LIST();

const changeCurrentFont = async (selected, fontIdString) => {
  const { files, family } = fonts.find((font) => font.family === selected);

  try {
    const url = Object.values(files)[0]; 
    const fonte = new FontFace(family, "url(" + url + ")");
    fonte.load().then(() => {
      document.fonts.add(fonte);

      const node = document.getElementById("preview-container-id");
      node?.style.setProperty(`--variable-font-${fontIdString}`, family + ", sans serif");
    })
  } catch (error) {
    console.log(error);
  }
};

const changeCurrentWeight = async (selected: string, selectedFont: number, fontIdString: string) => {
  const url = fonts[selectedFont].files[selected];

  try {
    const fonte = new FontFace(fonts[selectedFont].family, "url(" + url + ")");
    fonte.load().then(() => {
      document.fonts.add(fonte);

      const node = document.getElementById("preview-container-id");
      node?.style.setProperty(`--variable-font-${fontIdString}`, fonts[selectedFont].family + ", sans serif");
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  fonts as fontsList,
  changeCurrentFont,
  changeCurrentWeight
};
