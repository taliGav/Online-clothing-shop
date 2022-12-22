import { 
  createContext, 
  useEffect, 
  useReducer 
} from "react";

import {
  onAuthStateChangedListener,
  createUserProfileDocument,
} from "./../utils/firebase/firebase-utils";

import { createAction } from './../utils/reducer/reducer-utils'



export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unexpected action type ${type} in useReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CURRENT_USER, {currentUser: user})
      );
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserProfileDocument(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
