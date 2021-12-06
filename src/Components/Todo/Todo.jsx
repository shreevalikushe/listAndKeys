import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

function Todo() {
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
        <h3>Todo Task</h3>
        <TodoInput onSubmit={handleSubmit} />
        <TodoList
          data={list.filter((item) => !item.status)}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <div>
          <button onClick={() => setShowCompleted(!showCompleted)}>
            Toggle To See Completed
          </button>

          {showCompleted && (
            <TodoList
              data={list.filter((item) => item.status)}
              handleToggle={handleToggle}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default Todo;
