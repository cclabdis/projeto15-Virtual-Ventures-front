import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login";
// import Registration from "./pages/Registration/Registration";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components"
import Header from "./components/Header/Header";
// import Cart from "./pages/Cart/Cart";
// import CheckOut from "./pages/checkout/Checkout"

function App() {

  const [habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({ email: '', password: '' })
  const [dadosUsuario, setDadosUsuario] = React.useState(null)
 // const [idproduct, setIdProduct] =  React.useState()
  
  return (
    <Container>
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path='/' element={
            <HomePage
              habilitado={habilitado}
              setHabilitado={setHabilitado}
              login={login}
              setLogin={setLogin}
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario} />} />

          {/* <Route path="/registration" element={
            <Registration
              habilitado={habilitado}
              setHabilitado={setHabilitado}
            />} /> */}

          <Route path="/login" element={
            <Login
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario}
            />} />

{/*           
          <Route path="/cart" element={
            <Cart
              dadosUsuario={dadosUsuario}
            />} />

          <Route path="/checkout" element={
            <CheckOut
              dadosUsuario={dadosUsuario}
            />} /> */}

        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`

export default App;
