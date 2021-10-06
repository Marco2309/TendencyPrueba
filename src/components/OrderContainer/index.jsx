import React from "react";
import Container from "react-bootstrap/Container";
import OrderDetail from "./OrderDetail";
import Orders from "./Orders";

export default function Index({ orders, setOrder, order }) {
  return (
      <Container className='container-order'>
        <Orders orders={orders} setOrder={setOrder}/>
        <OrderDetail  order={order}/>
      </Container>
  );
}
