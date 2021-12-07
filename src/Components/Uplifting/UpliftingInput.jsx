import { useState } from "react";

function UpliftingInput({ onSubmit }) {
  const [state, setState] = useState({
    task: ""
  });
  function handleInputChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function onAdd() {
    onSubmit(state);
  }
  return (
    <>
      <button onClick={onAdd}> + </button>
      <input
        placeholder="Add Here"
        name="task"
        value={state.task}
        onChange={handleInputChange}
      />
    </>
  );
}
export default UpliftingInput;
