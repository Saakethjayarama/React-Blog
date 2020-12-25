import React, { useState } from "react";
import "./BlogForm.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

function BlogForm() {
  const INITIAL_STATE = {
    title: "",
    description: "",
  };

  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const isDisabled = state.title === "" || state.description === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div className="BlogForm">
      <Container className="BlogForm__Container">
        <h3>Create Blog</h3>
        <br />
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title of Blog</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={state.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Body of Blog</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="description"
                  onChange={handleChange}
                  value={state.description}
                />
              </Form.Group>

              <div className="float-right">
                <Button
                  variant="danger"
                  type="reset"
                  className="btn"
                  onClick={() => {
                    setState(INITIAL_STATE);
                  }}
                >
                  Clear
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn"
                  disabled={isDisabled}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogForm;
