import {useState} from 'react';
import logo from './logo.svg';
import InputField from './components/inputField';
import { Todo } from './model';
import TodoList from './components/toDolist';

import './App.css';

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd =(e:React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false,}])
      setTodo("");
      
    }


  }
  return (
    <div className="App">
     <span className='heading'>To-Do</span>
     <InputField  todo={todo}setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
