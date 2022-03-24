import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

export default function HomeScreen() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://127.0.0.1:5000/api/products");
      console.log(data);
      setproducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <Row>
      {products.map((product) => {
        return (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product {...product} />
          </Col>
        );
      })}
    </Row>
  );
}
