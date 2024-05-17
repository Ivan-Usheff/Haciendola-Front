
type AuthStateType = {
  login: 'AUTHENTICATED'
  name: string;
  email: string;
}

type UnAuthStateType = {
  login: 'UNAUTHENTICATED'
}

type ExpiredAuthStateType = {
  login: 'EXPIRED'
}

export type StateType = |{
  userState: AuthStateType
  action: Function;
}|{
  userState: UnAuthStateType
  action: Function;
}