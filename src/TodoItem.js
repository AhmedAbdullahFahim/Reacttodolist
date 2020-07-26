import React from 'react'

function TodoItem(prop) {
    const checkedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" 
            checked={prop.item.completed}
            onChange = {() => prop.handleChange(prop.item.id)} />
            <p style={prop.item.completed ? checkedStyle : null}>{prop.item.text}</p>
        </div>
    );
}

export default TodoItem