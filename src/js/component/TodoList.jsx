/*import React, {useState} from "react";

export const TodoList = ()=>{

    const [inputValues, setInputValues] = useState({
        taskInfo : ""
    });

    const [taskLists, setTaskList] = useState(["Estudiar el mapa","Encontrar el tesoro"]);

    const handleInputChange = (event) =>{
        setInputValues({
            ...inputValues, 
            [event.target.name] : event.target.value
        });
    }

    const sendTask = (event)=> {
        event.preventDefault();
        if(inputValues.taskInfo === "") return;
        const task = inputValues.taskInfo; 
        setTaskList([...taskLists, task]);
        setInputValues({taskInfo : ""});
    }

    const deleteTask = (index)=>{
        setTaskList(taskLists.filter((task, id)=>{
            return index !== id;
        }));
    }

    return(
        <div className="full-container">
            <h1 className="title">Todo List</h1>
            <div className="form">
                <form onSubmit={sendTask}>
                    <input type="text"
                    name="taskInfo"
                    value={inputValues.taskInfo}
                    onChange={handleInputChange}
                    />
                    <button placeholder="Write Task" type="submit" >Add Task</button>
                </form>
            </div>
            <div className="list">
                <ul>
                    {taskLists.map((task, index)=>{
                        return <li key={index}>{task} <a className="trash" onClick={()=>{
                            deleteTask(index);
                        }}>X</a></li>
                    })}
                    <li id="items">{taskLists.length} Items Left</li>
                </ul>
            </div> 
        </div>
    );
} */