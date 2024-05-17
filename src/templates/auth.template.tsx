import { Container, Stack } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { FooterComponent } from "../components/footer.components";
import { AuthProvider } from "../utils/utils";
import { useEffect } from "react";


export const AuthTemplate = () => {

  const navigate = useNavigate();
  

  useEffect(() => {
    // Cambiar a token cuando tenga endpont de login
    const token = localStorage.getItem('user');
    if(token)
      navigate('/');
  },[])
  
  return(
    <>
      <Container fluid={"md"} className="d-flex flex-column min-vh-100 justify-content-center align-items-center" >
        <AuthProvider childen={<Outlet />} />
      </Container>
      <FooterComponent />
    </>
  )
}