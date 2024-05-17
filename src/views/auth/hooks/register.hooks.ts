import { ChangeEvent, useState } from "react";
import { TextInputType } from "../../../components/input/types/text.type";
import { RegisterType } from "../types/register.type";

export const useRegister = () => {
  
  const [ loginState, setLogin ] = useState<RegisterType>({} as RegisterType);
  
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const target = e.target;
    const { name, value } = target;
    setLogin((prevState) => ({ ...prevState, [name]: value}))
  }
  
  const inputsBody:TextInputType[] = [
    {
      label: "Nombre",
      type: "text",
      name: "name",
      placeholder: "Nombre",
      onChagngeFuction: onInputChange,
      required: true,
      badFeedbackText: "Por favor ingrese su nombre"
    },
    {
      label: "Apellido",
      type: "text",
      name: "surName",
      placeholder: "Apellido",
      onChagngeFuction: onInputChange,
      required: true,
      badFeedbackText: "Por favor ingrese su apellido"
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      onChagngeFuction: onInputChange,
      required: true,
      badFeedbackText: "Por favor ingrese su correo"
    },
    {
      label: "Contraseña",
      type: "password",
      name: "password",
      placeholder: "Contraseña",
      onChagngeFuction: onInputChange,
      required: true,
      badFeedbackText: "Por favor ingrese su contraseña"
    }
  ] 

  return{
    inputsBody
  }
}