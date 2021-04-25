
import React, { useState } from 'react'
export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (!title || !desc) {
            alert("Likh to le kuch!!");
        }
        else {
            props.addTodo(title, desc);

            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className="container">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
