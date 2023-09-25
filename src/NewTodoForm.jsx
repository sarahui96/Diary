import { useState } from "react";


export function NewTodoForm(props){
    
    const [newItem, setNewItem] = useState("");

    function handleChange(e){
        setNewItem(e.target.value);
       }
       
    function handleSubmit(e){
        e.preventDefault()
    
        if (newItem === "") return
        props.onSubmit(newItem)
    
        setNewItem("")
      }
    return <form onSubmit={handleSubmit} className="new-item-form"> 
    <div className="form-row">
    <label className="activityLabel" htmlFor="item">Add an Activity</label>
    <input 
    type="text" 
    id="item"
    placeholder = "Activity"
    value={newItem}
    onChange={handleChange}>
    
    </input>
    </div>
    <button className="btn">Add</button>
    </form>
}