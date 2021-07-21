import React from "react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import Routes from "./routes";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
