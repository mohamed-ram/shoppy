import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductScreen() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await axios.get(
        `http://127.0.0.1:5000/api/products/${id}`
      );
      setProduct(product);
      console.log(product.rating);
    };
    getProduct();
  }, [id]);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        <i className="fa-solid fa-angles-left"> </i> Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating || 0} text={` ${product.rating}`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="d-grid">
                <Button
                  type="button"
                  className="btn-block"
                  disabled={product.countInStock < 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
