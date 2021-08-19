import React, { Component } from 'react';

class TodoMenu extends Component{
    state = {
        text: '',
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const warning = {
            backgroundColor: 'red'
        };

        return(
            <div className="todo-menu">
                <input 
                    type="text"
                    name="text"
                    className="text-input"
                    onChange={this.handleChange}
                    placeholder="Enter a todo item"
                    style={this.props.warning ? warning : null}
                />
                <input 
                    type="button"
                    defaultValue="ADD"
                    className="add"
                    onClick={() => this.props.addItem(this.state.text)}
                />
            </div>
        );
    }
}

export default TodoMenu;
