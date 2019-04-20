import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f3f3f3",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.complete ? "line-through" : "none"
    };
  };



  render() {
    const { id, title, complete } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            defaultChecked={complete}
            />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}


TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    float: 'right',
    borderRadius: '12px'
}

export default TodoItem;