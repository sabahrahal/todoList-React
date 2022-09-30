import React, {useState} from "react";

export const Todo = ()=> {

    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]); 
    const [disable,setDisable] = useState(false);

    return(    
  <div className="full-container">
            <h1 className="title">Todo List</h1>
            <div className="form">
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    if(inputValue === "") return;
                    setList([...list, inputValue]);
                    setInputValue("");
                }}>
                    <input placeholder="Write a Task" type="text" value={inputValue} onChange={(event)=>{
                      setInputValue(event.target.value);
                    }}/>

                </form>
            </div>
            <div className="list">
                <ul>
                   {        list.map((listElement, index)=>{
                            return <li key={index} onMouseOver={(event)=>{
                                setDisable(true);
                            }}
                            
                            onMouseOut={(event)=>{
                                setDisable(false);
                            }}

                            > {listElement} <a key={index} className={disable ? "trash" : "trash disable"} onClick={(event)=>{
                            setList(list.filter((element,id)=>{
                                return index !== id; 
                            }))
                    }}>X</a></li> })}
                    <span className="items">{list.length===0 ? "No tasks, add a task" : list.length + " Item Left"}</span>
                </ul>
            </div> 
     </div>
    )
}