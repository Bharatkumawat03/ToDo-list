import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todos } from './components/todos';
import { AddTodo } from './components/addTodo';



function App() {
  
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1 ;
    }

    const myTodo = {
      sno : sno ,
      title : title ,
      desc : desc ,
    }

    setTodos([...todos,myTodo])
  }

  const [todos , setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <>
      <div className="section">
        <div className="container w-50 mx-auto mt-5 ">
          <AddTodo addTodo={addTodo} />
        <div>
        <Todos todos={todos} onDelete={onDelete}/>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
