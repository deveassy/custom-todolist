import { combineReducers } from "redux";
import collections from "./collections";

const rootReducer = combineReducers({
  collections,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
