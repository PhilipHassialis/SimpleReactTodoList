import React, { Component } from "react";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
    state = {
        newtodo: "",
        empty: false
    };

    handleChange = e => {
        this.setState({ newtodo: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newtodo);
        this.setState({ newtodo: "" });
    };

    render() {
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newtodo">New todo:</label>
                    <input
                        placeholder="New todo"
                        type="text"
                        name="newtodo"
                        id="newtodo"
                        value={this.state.newtodo}
                        onChange={this.handleChange}
                    />

                    <button disabled={this.state.newtodo.length === 0}>
                        <i class="far fa-plus-square fa-lg" />
                    </button>
                </form>
            </div>
        );
    }
}
