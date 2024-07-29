export const Todoitem = ({todo,onDelete}) =>{
    
    return (
        <div className=' '>
          <p className="d-flex">Title : {todo.title}</p> 
         <p className="d-flex">Description : <p>{todo.desc}</p></p> 
          <button className='btn btn-danger' onClick={()=>onDelete(todo)} >Delete</button>
          <hr />
        </div>
        
    )
}