import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick, onMarkCompleted }) => {
  return (
    <div className={styles.itemsContainer}>
      {console.log("HERE IT IS : ",todoItems)}
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          completed = {item.completed}
          onDeleteClick={onDeleteClick}
          onMarkCompleted = {onMarkCompleted}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
