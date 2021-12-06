function TodoList({ data, handleDelete, handleToggle }) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} - {item.description} -{" "}
            {item.status ? "DONE" : "PENDING"}
            {!item.status && (
              <button onClick={() => handleDelete(item.id)}>X</button>
            )}
            <button onClick={() => handleToggle(item.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
