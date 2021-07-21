import { combineReducers } from "redux";
import menus from "./menus";
import collections from "./collections";

const rootReducer = combineReducers({
  menus,
  collections,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
