import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

export default function Orders({ orders, setOrder }) {
  const [selected, setSelected] = useState("");
  return (
    <Container className='border overflow-auto'>
      <h1>Orders</h1>
      <ListGroup>
        {orders ? (
          orders.map((order) => {
            let bgVariant = "dark";
            if (order.id === selected) {
              bgVariant = "primary";
            }
            return (
              <ListGroup.Item
                className="mt-2 shadow-sm rounded"
                variant={bgVariant}
                key={order.id}
                onClick={() => {
                  setOrder(order);
                  setSelected(order.id);
                }}
              >
                <a href={"#order" + order.id}>Order {order.number}</a>
              </ListGroup.Item>
            );
          })
        ) : (
          <p>No orders</p>
        )}
      </ListGroup>
    </Container>
  );
}
