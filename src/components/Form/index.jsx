import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function FormComponent() {
  return ( 
    <Container className="container-form">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSku">
            <Form.Control type="text" placeholder="sku" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Control type="text" placeholder="name" required/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridQuantity">
            <Form.Control type="text" placeholder="quantity" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Control type="text" placeholder="price"required />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
