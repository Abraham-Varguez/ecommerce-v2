import { Container, Row, Col } from "react-bootstrap";
import contact from "../contact";

const ContactScreen = () => {
  return (
    <Container className="vh-88 pt-3">
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in Touch</h3>
          <address>
            <strong>Email: abrahamvarguez21@yahoo.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone: 704-345-9281</strong>
            </p>
          </address>
          <p>{contact.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="'name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="'email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0 "
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
