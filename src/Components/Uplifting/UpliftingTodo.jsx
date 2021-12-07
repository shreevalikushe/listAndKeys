import { useState } from "react";
import UpliftingInput from "./UpliftingInput";
import UpliftingTodoList from "./UpliftingTodoList";
import { v4 as uuid } from "uuid";
import styles from "/src/styles.module.css";

function UpliftingTodo() {
  const [todo, setTodo] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  function onSubmit({ task }) {
    const payload = {
      task,
      status: false,
      id: uuid()
    };
    setTodo([...todo, payload]);
  }
  function changeStatus(id) {
    var handleStatus = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(handleStatus);
  }
  return (
    <div>
      <h1>Uplifting Todo</h1>
      <UpliftingInput onSubmit={onSubmit} />
      <UpliftingTodoList
        data={todo.filter((item) => !item.status)}
        changeStatus={changeStatus}
      />
      <div>
        <button
          onClick={() => setShowCompleted(!showCompleted)}
          className={styles.showBtn}
        >
          Show Completed Tasks
        </button>
      </div>
      {showCompleted && (
        <div className={styles.completedDiv}>
          <UpliftingTodoList
            key={todo.id}
            data={todo.filter((item) => item.status)}
            changeStatus={changeStatus}
          />
        </div>
      )}
    </div>
  );
}
export default UpliftingTodo;
