import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components"
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";

function App() {

  const [habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({ email: '', password: '' })
  const [dadosUsuario, setDadosUsuario] = React.useState(null)
  
  return (
    <Container>
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path='/' element={
            <HomePage
              habilitado={habilitado}
              setHabilitado={setHabilitado}
              
             />} />

          <Route path="/registration" element={
            <Registration
              habilitado={habilitado}
              setHabilitado={setHabilitado}
              setLogin={setLogin}
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario} 
            />} />

          <Route path="/login" element={
            <Login
              login={login}
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario}
            />} />

          
          <Route path="/cart" element={
            <Cart
              habilitado={habilitado}
              setHabilitado={setHabilitado}
              dadosUsuario={dadosUsuario}
            />} />
         
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`

export default App;
