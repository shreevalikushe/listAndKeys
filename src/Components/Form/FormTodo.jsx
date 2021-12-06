import { useState } from "react";
import { v4 as uuid } from "uuid";
import FormTodoInput from "./FormTodoInput";
import FormTodoList from "./FormTodoList";

function FormTodo() {
  const [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };
  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const handleToggle = (id) => {
    const updatedStatus = list.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setList(updatedStatus);
  };
  return (
    <>
      <div>
        <h3> Form Todo Task</h3>
        <FormTodoInput onSubmit={handleSubmit} />
        <FormTodoList
          data={list.filter((item) => !item.status)}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <div>
          <button onClick={() => setShowCompleted(!showCompleted)}>
            Toggle To See Completed
          </button>

          {showCompleted && (
            <FormTodoList
              data={list.filter((item) => item.status)}
              handleToggle={handleToggle}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default FormTodo;
