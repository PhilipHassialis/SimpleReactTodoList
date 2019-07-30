import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
    state = {
        editmode: false,
        updatedtodo: this.props.todo
    };

    handleEdit = () => {
        this.setState(st => ({
            editmode: true
        }));
    };

    changeTodo = e => {
        const updatedtodo = this.state.updatedtodo;
        updatedtodo.todo = e.target.value;
        this.setState(st => ({
            ...st,
            updatedtodo: updatedtodo
        }));
    };

    updateTodo = () => {
        this.setState(st => ({
            editmode: false
        }));
    };

    render() {
        return (
            <div className="Todo">
                {this.state.editmode ? (
                    <>
                        <input type="text" value={this.state.updatedtodo.todo} onChange={this.changeTodo} />

                        <button onClick={this.updateTodo}>
                            <i class="fas fa-edit fa-lg" />
                        </button>
                    </>
                ) : (
                    <>
                        <span>{this.props.todo.todo}</span>
                        <button onClick={this.handleEdit}>
                            <i class="fas fa-edit fa-lg" />
                        </button>

                        <button onClick={() => this.props.removeTodo(this.props.todo.id)}>
                            <i class="fas fa-trash fa-lg" />
                        </button>
                    </>
                )}
            </div>
        );
    }
}
