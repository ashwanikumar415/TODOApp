import React from 'react'

export class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        const clickedItemId = e.target.getAttribute("data-key");
        console.log(clickedItemId);
        this.props.updateTaskList(clickedItemId);
    }
    render() {
        console.log("props:",this.props)
        return(
            <ul onClick = {this.clickHandler}>
             {this.props.list.map((elem) => {
                  return <li key={elem.id} 
                            data-key = {elem.id}>{elem.text}</li>
             })}
             </ul>
        );
    }
}