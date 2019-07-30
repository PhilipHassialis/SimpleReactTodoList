import React, { Component } from "react";
import Todo from "./Todo.js";
import uuid from "uuid/v4";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
    state = {
        todos: []
    };

    addTodo = newTodoText => {
        const newTodo = {
            id: uuid(),
            todo: newTodoText
        };
        this.setState(st => ({
            todos: [...st.todos, newTodo]
        }));
    };

    removeTodo = todoId => {
        this.setState(st => ({
            todos: st.todos.filter(t => t.id !== todoId)
        }));
    };

    // updateTodo = todo => {
    //     const newTodos = [...this.state.todos];
    //     const todoForUpdate = newTodos.find(t => t.id === todo.id);
    //     todoForUpdate.todo = todo.todo;
    //     this.setState({ todos: newTodos });
    // };

    render() {
        return (
            <div className="TodoList">
                <h2>Todo List</h2>
                {this.state.todos.map(todo => (
                    <Todo key={todo.id} todo={todo} removeTodo={this.removeTodo} />
                ))}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}
