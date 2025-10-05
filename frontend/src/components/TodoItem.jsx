function TodoItem({ id, todoName, todoDate, completed, onDeleteClick, onMarkCompleted }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
          {completed ? (
            <button type="button" className="btn btn-success" disabled>
              Completed
            </button>
          ): (
              <button
            type = "button"
            className = "btn btn-warning kg-button"
            onClick = { () => onMarkCompleted(id) }
              >
            Mark Completed
          </button>
          )}
      </div>
    </div>
    </div >
  );
}

export default TodoItem;
