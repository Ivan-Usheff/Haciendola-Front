import { useContext, useEffect } from "react";
import { AuthContext } from "../../utils/utils";
import { useNavigate } from "react-router-dom";


export const LogOutView = () => {


  const { userState, action } = useContext(AuthContext)
  const navigate = useNavigate();
  
  useEffect(()=>{
    console.log("🚀 ~ LogOutView ~ action:", action)
    action()
    navigate('/', {replace: true})
  },[])

  return(<></>)
}