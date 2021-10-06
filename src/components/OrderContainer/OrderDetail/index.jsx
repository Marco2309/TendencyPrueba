import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function OrderDetail({ order }) {
  const data = JSON.parse(sessionStorage.getItem(`${order.number}`));
  const [visible, setVisible] = useState("d-none");
  let display = "d-none";
  if (order) {
    display = "d-block";
  }

  const handlePay = () => {
    setTimeout(function () {
      setVisible("");
    }, 500);
    setTimeout(function () {
      setVisible("d-none");
    }, 1200);
  };
  return (
    <Container className="d-flex justify-content-center flex-wrap border overflow-auto">
      <h1 id={"order" + order.id}>Number of order: {order.number} </h1>
      {order ? (
        order.items.map((item) => {
          return (
            <Card key={item.id} style={{ width: "18rem" }} className="mb-2">
              <Card.Header className="fw-bold">Sku: {item.sku}</Card.Header>
              <ListGroup horizontal>
                <ListGroup.Item>name: {item.name}</ListGroup.Item>
                <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
                <ListGroup.Item>price: {item.price}</ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })
      ) : (
        <p>select an order to view its details</p>
      )}
      {data
        ? data.map((item, i) => {
            return (
              <Card key={i} style={{ width: "18rem" }} className="mb-2">
                <Card.Header className="fw-bold">Sku: {item.sku}</Card.Header>
                <ListGroup horizontal>
                  <ListGroup.Item>name: {item.name}</ListGroup.Item>
                  <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
                  <ListGroup.Item>price: {item.price}</ListGroup.Item>
                </ListGroup>
              </Card>
            );
          })
        : null}
      <Container className="d-flex justify-content-center flex-wrap position-relative">
        <Button
          className={"pay-btn " + display}
          variant="success"
          onClick={handlePay}
        >
          Pay
        </Button>
        <Alert
          variant="success"
          className={
            "position-absolute top-0 start-50 translate-middle " + visible
          }
        >
          successful payment
        </Alert>
      </Container>
    </Container>
  );
}
