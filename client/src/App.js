import "./App.css";
import React, { Fragment } from "react";
import Input from "./components/input";
import Items from "./components/Items/items";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Input />
        <Items prop={"hello"} />
      </div>
    </Provider>
  );
};

export default App;
