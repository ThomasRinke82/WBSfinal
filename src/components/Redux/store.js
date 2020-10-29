import { createStore } from "redux";
import StateUpdater from "./Reducers";

const store = createStore(
  StateUpdater,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
