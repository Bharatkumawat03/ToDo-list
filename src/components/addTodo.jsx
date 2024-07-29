import { useState } from "react"

export const AddTodo =({addTodo}) => {
    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();

        addTodo(title, desc);
        setTitle("");
        setDesc("");
    }

    return(
        
    <div className="container">
        <h3>Add a Todo</h3>

    <form className='d-grid  mx-auto' onSubmit={submit}>
        <div className="mb-3">
        <label htmlFor="Title" className="form-label">Title :</label>
        <input type="text" id='Title' name='Title' required value={title} onChange={(e)=>setTitle( e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
        <label htmlFor="desc" className="form-label">Description :</label>
        <input type="text" id='desc' name='desc' required value={desc} className="form-control" onChange={(e)=>setDesc( e.target.value)}/>
        </div>
        

        <button type="submit" className="btn btn-sm btn-success w-25">Add Todo</button>
        </form><hr />
    </div>
        
        
    )
}