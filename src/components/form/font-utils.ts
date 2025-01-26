import { GOOGLE_FONTS_LIST, TFont } from "./select/fonts";

const fonts: TFont[] = GOOGLE_FONTS_LIST();

const changeCurrentFont = async (selected: string, fontIdString: string) => {
  const font = fonts.find((font) => font.family === selected);

  if (!font) {
    console.error(`Font family "${selected}" not found.`);
    return;
  }

  const { files, family } = font;

  try {
    const url = Object.values(files)[0]; 
    
    const fonte = new FontFace(family, "url(" + url + ")");
    fonte.load().then(() => {
      document.fonts.add(fonte);

      const node = document.getElementById("preview-container-id");
      node?.style.setProperty(`--variable-font-${fontIdString}`, family + ", sans serif");
    })
  } catch (error) {
    console.error(error);
  }
};

const changeToCustomFont = async (selected: File, fontIdString: string) => {
  const url = URL.createObjectURL(selected);
  
  try {
    const fonte = new FontFace("customFont", "url(" + url + ")");
    
    await fonte.load();
    document.fonts.add(fonte);

    const node = document.getElementById("preview-container-id");
    node?.style.setProperty(`--variable-font-${fontIdString}`, "customFont" + ", sans serif");
  } catch (error) {
    console.error(error);
  }
};

const changeCurrentWeight = async (selected: string, selectedFont: number, fontIdString: string) => {
  const font = fonts[selectedFont];

  if (!font) {
    console.error(`Font family "${selectedFont}" not found.`);
    return;
  }

  const url = font.files[selected];

  if (!url) {
    console.error(`Weight "${selected}" not found for font "${selectedFont}".`);
    return;
  }

  try {
    const fonte = new FontFace(font.family, "url(" + url + ")");
    fonte.load().then(() => {
      document.fonts.add(fonte);

      const node = document.getElementById("preview-container-id");
      node?.style.setProperty(`--variable-font-${fontIdString}`, font.family + ", sans serif");
    })
  } catch (error) {
    console.error(error);
  }
}

export {
  fonts as fontsList,
  changeCurrentFont,
  changeCurrentWeight,
  changeToCustomFont
};
