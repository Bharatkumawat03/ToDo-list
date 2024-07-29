import { Todoitem } from "./todoitem";

export const Todos = (props)=> {
    return(
        <div className="container">
           <h3>todos list</h3> 
           { props.todos.length === 0 ? "no todos to display" :
           props.todos.map((todo)=>{
            return(<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
           })}
           
        </div>
    )
}
