
export type PayloadActionType = {
  name: string;
  email: string;
}

export type ActionType = {
  action: 'LOGOUT';
}|{
  action: 'LOGIN';
  payload: PayloadActionType;
}