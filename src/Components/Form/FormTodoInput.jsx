import { useState } from "react";

function FormTodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    description: ""
  });
  function handleInputChange(e) {
    //console.log(e.target.name, e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  function onFormSubmit(e) {
    e.preventDefault();
    onSubmit(state);
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            placeholder="Title"
            name="title"
            value={state.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder="Description"
            name="description"
            value={state.description}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="ADD" />
      </form>
    </>
  );
}

export default FormTodoInput;
