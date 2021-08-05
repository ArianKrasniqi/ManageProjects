import { createStore, applyMiddleware, Store, EmptyObject } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import projectsReducer from "./projects/reducer";
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  users: usersReducer
});

const store: Store<ProjectsState | UsersState | EmptyObject, ProjectAction | UserAction> & {
  dispatch: UserDispatchType | ProjectDispatchType;
} = createStore(rootReducer, applyMiddleware(thunk))

export default store;