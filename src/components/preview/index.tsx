import TextComponent from "./text";
import TitleComponent from "./title";
import "./style.css";

const FontPreview = () => {
  return <div className="main-preview" id="preview-container-id">
    <TitleComponent>Título</TitleComponent>
    <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eligendi iusto cupiditate nam necessitatibus tempora, pariatur, quos illum obcaecati nulla labore! Soluta praesentium repudiandae, nesciunt alias itaque recusandae tenetur velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, suscipit? Quos obcaecati fugiat ad recusandae magnam iusto minima labore, corrupti, exercitationem dolorem veniam amet blanditiis sapiente vel reiciendis illum nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas perferendis repellendus repellat quasi dicta minus ad fugiat assumenda itaque vel ipsam est aspernatur nostrum, a omnis commodi non cumque.</TextComponent>
  </div>
};

export default FontPreview;
