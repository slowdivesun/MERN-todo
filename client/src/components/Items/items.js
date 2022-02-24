import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTodos } from "../../actions/todo";
import Item from "../item";
import "./items.css";

const Items = ({ getTodos, todo: { todos } }) => {
  const [separate, setSeparate] = useState(false);
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='itemContainer'>
      <button className='removeBtn' onClick={(e) => setSeparate(true)}>
        Remove Completed Tasks
      </button>
      <div className='itemsWrapper'>
        <div className='items'>
          {separate && <h4>Incomplete tasks</h4>}
          {todos.map((t) => {
            if (t.status === false) {
              return <Item key={t._id} todo={t} />;
            } else {
              if (separate === false) {
                return <Item key={t._id} todo={t} />;
              }
            }
          })}
        </div>
        <div className='itemsCompleted'>
          {separate && <h4>Completed Tasks: </h4>}
          {todos.map((t) => {
            return separate === true && t.status === true ? (
              <Item key={t._id} todo={t} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

Items.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodos })(Items);
