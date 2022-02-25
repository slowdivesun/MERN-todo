import axios from "axios";

// Add todo
export const addTodo = (title) => async (dispatch) => {
  console.log("hello");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = { title };

  try {
    const res = await axios.post(
      "https://mern-todo-backend.vercel.app/api/todos",
      body,
      config
    );
    console.log(res);

    dispatch({
      type: "ADD_TODO",
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://mern-todo-backend.vercel.app/api/todos"
    );
    console.log(res.data);

    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const changeStatus = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://mern-todo-backend.vercel.app/api/todos/${id}`
    );
    console.log(res);

    dispatch({
      type: "CHANGE_STATUS",
      payload: { id: id },
    });
  } catch (err) {
    console.error(err);
  }
};
