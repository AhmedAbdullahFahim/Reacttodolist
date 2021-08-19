import React, { Component } from 'react';

class TodoItem extends Component{
    render()
    {
        const style = {
            textDecoration: 'line-through',
            color: '#cdcdcd',
            fontStyle: 'italic',
        };

        return(
            <div className="todo-item">
                <input
                    type ="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />

                <span style={this.props.item.completed ? style : null}>
                    {this.props.item.todo}
                </span>

                <input 
                    type="button"
                    defaultValue="x"
                    className="remove"
                    onClick={() => this.props.removeItem(this.props.item.id)}
                />
            </div>
        );
    }
}

export default TodoItem