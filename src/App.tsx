import React from "react";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import MainRoute from "./components/MainRoute";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}

export default App;
