import React, { Component } from 'react'

import TodoItem from './components/TodoItem'
import TodoMenu from './components/TodoMenu'
import todosData from './components/TodosData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
      warning: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updatedTodos,
      }
    })
  }

  removeItem(id) {
    this.setState((prevState) => {
      prevState.todos = prevState.todos.filter((x) => x.id !== id)
      return prevState
    })
  }

  addItem(text) {
    text = text.trim()

    if (text === '') {
      this.setState({ warning: true })
      return
    }
    const lastId =
      this.state.todos.length !== 0
        ? this.state.todos[this.state.todos.length - 1].id
        : 0
    const newItem = {
      id: lastId + 1,
      todo: text,
      completed: false,
    }

    this.setState((prevState) => {
      prevState.todos.push(newItem)
      prevState.warning = false
      return prevState
    })
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        removeItem={this.removeItem}
      />
    ))

    return (
      <div className='todo-list'>
        <TodoMenu
          handleChange={this.handleChange}
          warning={this.warning}
          addItem={this.addItem}
        />
        {todoItems}
      </div>
    )
  }
}

export default App
