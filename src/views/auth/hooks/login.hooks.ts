import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../utils/utils";
import { TextInputType } from "../../../components/input/types/text.type";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../utils/types/user.type";

const init_user = {email:'', password:''}

export const useLogin = () => {

  const [ loginState, setLogin ] = useState<{email:string,password:string}>(init_user);
  const [user, setUser] = useState<UserType>()
  const [validated, setValidated] = useState(false);
  const { userState, action } = useContext(AuthContext)
  let requestOptions:RequestInit = {method: 'POST'};
  console.log("🚀 ~ useLogin ~ action:", action)
  const navigate = useNavigate();
  


  const fechLogin = async () => {
    const uri = `${process.env.REACT_APP_BACK_SERVICE}/auth/singIn`
    fetch(uri, requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const {user, email, payload} = data.token;
        setUser({user, email,}); 
        action(user, email, payload);
        return navigate('/',{replace: true});
      })
      .catch((err) => {
          console.log(err.message);
      });
  }
  

  const handleSubmit  = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    requestOptions = {
      method: 'POST',
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({...loginState})
    };
    await fechLogin()
  };

  
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const target = e.target;
    const { name, value } = target;
    setLogin((prevState) => ({ ...prevState, [name]: value}))
  }
  
  const inputsBody:TextInputType[] = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      onChagngeFuction: onInputChange,
      required: true,
      badFeedbackText: "Por favor ingrese tu correo"
    },
    {
      label: "Contraseña",
      type: "password",
      name: "password",
      placeholder: "Contraseña",
      onChagngeFuction: onInputChange,
      required: true,
      badFeedbackText: "Por favor ingrese tu contraseña"
    }
  ] 


  return{
    inputsBody,
    validated,
    handleSubmit
  }
}