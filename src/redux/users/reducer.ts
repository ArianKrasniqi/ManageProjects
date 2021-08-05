import * as actionTypes from "./actionTypes";
import users from "data/users";

const initialState: UsersState = {
  users,
};

const reducer = (
  state: UsersState = initialState,
  action: UserAction
): UsersState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      const newUser: IUser = {
        id: Math.random(), // not really unique
        name: action.user.name,
        email: action.user.email,
      };
      return {
        ...state,
        users: state.users.concat(newUser),
      };
  }
  return state;
};

export default reducer;
