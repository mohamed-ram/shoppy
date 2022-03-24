import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./Rating";

export default function Product({
  _id: id,
  title,
  rating,
  numReviews,
  price,
  image,
}) {
  return (
    <Card className="my-3">
      <Link to={`/products/${id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Title as="div">
            <strong>{title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-1">
            <Rating
              value={rating}
              // color="green"
              text={` ${rating} ${"\u2022"} ${numReviews} reviews`}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
