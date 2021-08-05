import { createStore, applyMiddleware, Store, EmptyObject } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import projectsReducer from "./projects/reducer";
import usersReducer from "./users/reducer";

export const rootReducer = combineReducers({
  projects: projectsReducer,
  users: usersReducer,
});

export type StoreType = Store<
  ProjectsState | UsersState | EmptyObject,
  ProjectAction | UserAction
> & {
  dispatch: UserDispatchType | ProjectDispatchType;
};

const store: StoreType = createStore(rootReducer, applyMiddleware(thunk));

export default store;
