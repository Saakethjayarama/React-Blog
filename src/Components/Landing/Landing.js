import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogTile from "../BlogTile";
import "./Landing.css";

function Landing(props) {
  return (
    <div className="Landing">
      <Container fluid>
        <Row>
          <Col md={10} className="Landing__BlogTile">
            <BlogTile {...props} />
            <BlogTile />
            <BlogTile />
            <BlogTile />
            <BlogTile />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
