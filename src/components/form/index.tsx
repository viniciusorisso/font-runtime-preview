import FormGroup from "./form-group";
const FormFont = () => {
  return <div>
    <h2>Fonts</h2>

    <FormGroup label="Title" fontIdString="title" />
    <FormGroup label="Text" fontIdString="text" />
  </div>
};

export default FormFont;
