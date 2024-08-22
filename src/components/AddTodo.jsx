import React, { useState } from 'react'

export default function AddTodo( {onNewItem}) {
    const [ todoName, setTodoName] = useState();
    const [ dueDate, setDueDate] = useState();

    const handleNameChange = ( event)=>{
      setTodoName(event.target.value);

    };
    const handleDateChange = (event)=>{
      setDueDate(event.target.value);
      
    };
    const handleAddButtonClicked = ()  =>{
      onNewItem(todoName, dueDate);
      setDueDate("");
      setTodoName("");
    }



  return (
    
      <div class="container text-center kg-row">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo here" 
            value={todoName}
            onChange={handleNameChange} />
          </div>
          <div class="col-4">
            <input type="date"value={dueDate} onChange={handleDateChange} />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success kg-button"  onClick={handleAddButtonClicked}>
              ADD
            </button>
          </div>
        </div>
    </div>
  )
}

