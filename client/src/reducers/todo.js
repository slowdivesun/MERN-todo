const initialState = { todos: [] };

export default function func(state = initialState, action) {
  switch (action.type) {
    case "GET_TODOS":
      //   console.log([...state, action.payload]);
      return { ...state, todos: action.payload };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "CHANGE_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload.id
            ? { ...todo, status: !todo.status }
            : todo
        ),
      };
    default:
      return state;
  }
}
