import { useState } from "react";

function TodoInput({ onSubmit }) {
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
  function onAdd() {
    onSubmit(state);
  }
  return (
    <>
      <div>
        <div>
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
          <button onClick={onAdd}>ADD</button>
        </div>
      </div>
    </>
  );
}

export default TodoInput;
