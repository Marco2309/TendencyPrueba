import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function FormComponent({ orderN, setActualizar }) {
  const [disable_btn, setDisable_btn] = useState(true);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const hadleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(sessionStorage.getItem(`${orderN}`));
    data
      ? sessionStorage.setItem(
          `${orderN}`,
          JSON.stringify([...data, { sku, name, quantity, price }])
        )
      : sessionStorage.setItem(
          `${orderN}`,
          JSON.stringify([{ sku, name, quantity, price }])
        );
        setSku('')
        setName('')
        setQuantity('')
        setPrice('')
        setActualizar([orderN,sku])
  };

  useEffect(() => {
    if (orderN) {
      setDisable_btn(false);
    }
  }, [disable_btn, orderN]);

  return (
    <Container className="container-form overflow-auto">
      <Form onSubmit={hadleSubmit}>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridSku">
            <Form.Control
              type="text"
              placeholder="sku"
              onChange={(e) => setSku(e.target.value)}
              value={sku}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridQuantity">
            <Form.Control
              type="text"
              placeholder="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Control
              type="text"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" disabled={disable_btn}>
          Add item
        </Button>
      </Form>
    </Container>
  );
}
