import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"

function TodoItems({todoItems, onDeleteClick}) {
  return (
    <div>
      <div className={style.itemcontainer}>
       {todoItems.map(item =>   <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick = {onDeleteClick}></TodoItem>)}
      </div> 
    </div>
  )
}

export default TodoItems;
