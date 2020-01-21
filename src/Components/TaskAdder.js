import React, {useState} from 'react'
const uuidGenerator = require('uuid/v1');
// Below is functionComponent
// use useState to manange states
const addTaskToList = () => {
    alert("Task added");
};

export const TaskAdder = (props) => {
    const [inputText, setInputText] = useState("");
    const handleInputChange = (e) => {
        console.log([e.target.name]+":"+[e.target.value]);
        setInputText(e.target.value)
    }

   return (
        <div>
            <label >Add Task</label>
            <input 
                type ="text"
                name ="task1"
                value = {inputText}
                onChange = {handleInputChange}
            />
            <input
                type ="button" 
                value = "Add"
                onClick = {(e) => {
                    const taskObj = {
                        id:uuidGenerator(),
                        text: inputText
                    };
                    console.log("button click:", taskObj);
                    props.callbackHandler(taskObj)
                }}
            />
        </div>
    )
}