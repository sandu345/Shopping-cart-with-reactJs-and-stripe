import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Rotes, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import CartProvider from "./CartContext";

//localhost:3000 -> Home
//localhost:3000/success -> Success

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
