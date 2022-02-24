import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeStatus } from "../../actions/todo";
import "./item.css";

export const Item = ({ changeStatus, todo }) => {
  const [error, setError] = useState(false);
  const handleClick = (e) => {
    changeStatus(todo._id);
    setError(true);
  };
  return (
    <div
      className={todo.status ? "itemWrapperDone" : "itemWrapperPending"}
      onClick={(e) => handleClick(e)}
    >
      <div>{todo.title}</div>
    </div>
  );
};

Item.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default connect(null, { changeStatus })(Item);
