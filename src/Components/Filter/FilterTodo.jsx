import { useState } from "react";
import { v4 as uuid } from "uuid";
import FilterTodoInput from "./FilterTodoInput";
import FilterTodoList from "./FilterTodoList";

function FilterTodo() {
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
        <FilterTodoInput onSubmit={handleSubmit} />
        <FilterTodoList
          data={list.filter((item) => !item.status)}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <div>
          <button onClick={() => setShowCompleted(!showCompleted)}>
            {showCompleted ? "HIDE COMPLETED" : "SHOW COMPLETED"}
          </button>

          {showCompleted && (
            <FilterTodoList
              data={list.filter((item) => item.status)}
              handleToggle={handleToggle}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default FilterTodo;
