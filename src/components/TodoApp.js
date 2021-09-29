import { useState } from "react";
import TodoElement from "./TodoElement";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  }

  const handleDelete = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  } 

  const add = () => {
    const newTodo = {id: todoList.length, content: value};
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setValue("");
  }


  return (
    <div>
      <html>TODO App</html>
      <AddTodo value={value} onChange={handleChange} add={add} />
      <ul>
        {todoList.map(todo => (
          <TodoElement 
            key={todo.id} 
            content={todo.content}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  )
}
export default TodoApp;