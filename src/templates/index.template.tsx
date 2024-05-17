import React, { useEffect } from "react";
import { Stack, Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { FooterComponent } from "../components/footer.components";
import { NavBarComponent } from "../components/nav-bar.components";
import { AuthProvider } from "../utils/utils";

export const IndexTemplate = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    // Cambiar a token cuando tenga endpont de login
    const token = localStorage.getItem('user');
    if(!token)
      navigate('/');
  },[])
  
  return(
    <AuthProvider childen={
    <>
      <NavBarComponent />
      <Container className="min-vh-100 mw-100 d-flex py-1 py-sm-5 fluid flex-column align-items-center" >
          <Outlet />
      </Container>
      <FooterComponent />
    </>
    } />
  )
}