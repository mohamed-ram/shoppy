import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/products/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
