import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext({
  userId: "",
  username: "",
});
const { Provider } = UserContext;

function reducer(state, action) {
  switch (action.type) {
    case "loggin":
      return {
        userId: action.userId,
        username: action.username,
      };

    default:
      return state;
  }
}

function UserProvider({ value = {}, ...props }) {
  const [state, dispatch] = useReducer(reducer, {});

  return <Provider value={[state, dispatch]} {...props} />;
}

function useUserContext() {
  return useContext(UserContext);
}
export { UserProvider, useUserContext };
