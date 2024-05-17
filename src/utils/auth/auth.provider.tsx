import { useReducer } from "react"
import { AuthContext } from "./auth.context"
import { StateType } from "./types/state.type"
import { authReducer } from "./auth.reducer"
import { ActionType, PayloadActionType } from "./types/action.type"

const INIT_STATE = {} as StateType

const init = ():StateType => {
  const user:PayloadActionType = JSON.parse(localStorage.getItem('user') as string);
  return user 
    ? {
      userState: {login: 'AUTHENTICATED', name: user.name, email: user.email},
      action: () => {}
    }
    : {
      userState: {login: 'UNAUTHENTICATED'},
      action: () => {}
    }
}

type ChildrenProp = {childen: JSX.Element | JSX.Element[]}

export const AuthProvider = ({childen}:ChildrenProp) => {

  const [authState, authDispatch] = useReducer(authReducer, INIT_STATE, init);

  const login = (name:string, email:string, token:string) => {
    const user:PayloadActionType = {name, email};
    const action:ActionType = {action: 'LOGIN', payload: user};

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

    authDispatch(action)
  }
  
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    const action:ActionType = {action: 'LOGOUT' };
    authDispatch(action);
  }
  const actionState = authState.userState.login === 'UNAUTHENTICATED' ? login : logout;
  
  return(
    <AuthContext.Provider value={{
      ...authState,
      action: actionState
    }}>
      {childen}
    </AuthContext.Provider>
  )
}