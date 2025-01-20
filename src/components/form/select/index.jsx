const SelectComponent = ({ onChange, list }) => {
  return <select onChange={onChange}>
      {
        list.map((element) => <option key={element.name}>{element.name}</option>)
      }
    </select>
};

export default SelectComponent;
