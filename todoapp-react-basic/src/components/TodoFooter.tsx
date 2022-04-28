const TodoFooter = () => {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  );
};

export default TodoFooter;
