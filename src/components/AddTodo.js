import React, { Component } from "react";
import PropTypes from 'prop-types'

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          onChange={this.onChange}
          value={this.state.title}
        />
        <input type="submit" value="Submit" style={{ flex: "1" }} />
      </form>
    );
  }
}

AddTodo.propTypes = {
  todo: PropTypes.array.isRequired
};

export default AddTodo;
