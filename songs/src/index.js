import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reducers from "./reducers";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={createStore(reducers)}>
    <App tab="home" />
  </Provider>
);
