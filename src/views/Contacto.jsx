import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const PlansPage = () => {
  return (
    <Container className="pt-5 d-flex align-items-center flex-column">
      <h1 className="text-center my-4">
        Cuéntanos, ¿En qué te podemos ayudar?
      </h1>
      <Form className="d-flex flex-column w-100">
        <Form.Group
          className="mb-3 text-center"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          className="mb-3 text-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="danger">Enviar</Button>
    </Container>
  );
};
export default PlansPage;
