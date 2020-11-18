import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle = () => {
    const completed = this.props.todo.completed;
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  markCompleted = () => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleted.bind(this, id)}
          />{" "}
          {title}{" "}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// Proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
