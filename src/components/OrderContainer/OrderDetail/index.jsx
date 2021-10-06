import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


export default function OrderDetail({ order }) {
  let display = 'd-none'
  if(order){
    display = 'd-block'
  }
  return (
    <Container className='d-flex justify-content-center flex-wrap border'>
      <h1 id={"order"+order.id}>Number of order: {order.number} </h1>
      {order
        ? order.items.map((item) => {
            return (
              <Card key={item.id} style={{ width: "18rem" }} className='mb-2'>
                <Card.Header className='fw-bold'>Sku: {item.sku}</Card.Header>
                <ListGroup horizontal>
                  <ListGroup.Item>name: {item.name}</ListGroup.Item>
                  <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
                  <ListGroup.Item>price: {item.price}</ListGroup.Item>
                </ListGroup>
              </Card>
            );
          })
        : <p>select an order to view its details</p>}
        <Button className={'pay-btn ' + display} variant="success">Pay</Button>
    </Container>
  );
}
