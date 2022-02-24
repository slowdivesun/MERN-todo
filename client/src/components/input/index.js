import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.css";
import { addTodo } from "../../actions/todo";
import { connect } from "react-redux";

const Input = ({ addTodo }) => {
  const [formData, setFormData] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.length < 5) {
      setError(true);
    }
    if (formData.length >= 5) {
      console.log(formData);
      addTodo(formData);
      console.log("yes");
      setFormData("");
    }
  };
  return (
    <div className='formWrapper'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => {
            setFormData(e.target.value);

            if (e.target.value.length >= 5) {
              setError(false);
            }
          }}
          value={formData}
        ></input>
        <br />
        {error && <small>Please enter more than 5 letters</small>}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

Input.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { addTodo })(Input);
