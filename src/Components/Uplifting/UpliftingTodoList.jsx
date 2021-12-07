import styles from "/src/styles.module.css";

function UpliftingTodoList({ data, changeStatus }) {
  function handleToggle(id) {
    changeStatus(id);
  }
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.div}>
            <h3>
              <button
                className={styles.btn}
                onClick={() => handleToggle(item.id)}
              >
                <span>&#10003;</span>
              </button>
              {item.task}
            </h3>
          </div>
        );
      })}
    </>
  );
}
export default UpliftingTodoList;
