import { ActionType } from "./types/action.type";
import { StateType } from "./types/state.type"


export const authReducer = (state: StateType, action: ActionType):StateType => {

  switch(action.action){
    case 'LOGOUT':
      return {
        ...state,
        userState: {
          login: 'UNAUTHENTICATED'
        }
      };
      
    case 'LOGIN':
      const { name, email } = action.payload
      return {
        ...state,
        userState: {
          login: 'AUTHENTICATED',
          name,
          email
        },
        action: state.action
      };
      
    default:
      return state;
  }
  
}