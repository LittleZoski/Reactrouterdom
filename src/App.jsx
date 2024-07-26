import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import TodoItem from './components/todoItem'
import {ToDOList} from './data/data'

function App() {
  const [todoList, setTodoList] = useState(ToDOList);
  const [newTask, setNewTask] = useState('');
  const addItem = () => {
    const newItem = {
      id: todoList.length + 1, // Generate a unique ID (not recommended in real apps)
      checked: false,
      task: newTask
    };
    setTodoList([...todoList, newItem]);
    setNewTask(''); // Clear input field after adding
  }

  // Function to delete an item based on ID
  const deleteItem = (id) => {
    const updatedList = todoList.filter(item => item.id !== id);
    setTodoList(updatedList);
  };

  // Function to toggle the checked status of an item
  const toggleChecked = (id) => {
    const updatedList = todoList.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setTodoList(updatedList);
  };


  return (
    <>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addItem}>Add New Item</button>
        <div>
        {todoList.map((Item, index)=>{
          return(
            <> 
              <TodoItem key={Item.id} item={Item} onDelete={() => deleteItem(Item.id)} onToggleChecked={() => toggleChecked(Item.id)}/>
            </>
          )
        })}
        </div>
        
    </>
  )
}

export default App
