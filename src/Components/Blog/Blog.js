import React from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import "./Blog.css";

function Blog() {
  return (
    <div className="Blog">
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col md={8}>
            <div className="Blog__Title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="Blog_Body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              cumque. Debitis similique repudiandae, consequuntur voluptas id
              possimus itaque magnam, enim iste quaerat non ipsa. Voluptatum
              ullam reprehenderit libero praesentium quaerat? Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Corrupti ducimus dolorem
              placeat, velit tempora eum eaque. Maxime esse minus, ut, ipsa ab,
              autem in accusantium praesentium omnis itaque animi officia. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quae sint
              recusandae atque molestiae dicta beatae quibusdam expedita
              nesciunt explicabo. Aut tempore quas, laboriosam saepe nemo
              inventore aspernatur rerum tempora animi. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Debitis accusantium amet in
              eius, hic facilis odio numquam dolores unde eaque laborum aut
              atque fugit odit, enim libero beatae, nemo tenetur. Sint,
              doloremque! Asperiores, dolore excepturi sapiente perferendis
              cumque omnis reiciendis nam quos, repellendus nisi similique ab
              ullam velit quas molestias nostrum culpa repellat neque eum.
              Veniam reiciendis optio, tempora hic sint a quis et possimus
              accusantium qui perferendis consequatur recusandae incidunt.
              Nostrum facilis rem cupiditate minus, atque illo laboriosam.
              Voluptate ipsam optio facilis illum doloribus adipisci architecto
              magnam tenetur praesentium! Culpa quibusdam vel rem quam facere
              itaque sed suscipit incidunt!
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={2}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Link 1
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
