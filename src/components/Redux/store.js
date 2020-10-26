import { createStore } from "redux";
import StateUpdater from "./Reducers";

const store = createStore(StateUpdater);

export default store;
