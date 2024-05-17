import { ChangeEvent } from "react";

export type TextInputType = {
  label: string;
  type: 'text'|'email'|'password';
  name: string;
  placeholder: string;
  required: boolean;
  onChagngeFuction: (e: ChangeEvent<HTMLInputElement>)=>void
  description?: string;
  badFeedbackText?: string;
}