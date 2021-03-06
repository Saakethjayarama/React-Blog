import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogTile from "../BlogTile";
import "./Landing.css";

function Landing(props) {
  const [isactive, setActive] = useState(true);
  const [posts, setPosts] = useState([]);

  const [reload, setReload] = useState(null);
  useEffect(() => {
    setActive(true);
    fetch("http://localhost/get.php")
      .then((res) => res.json())
      .then((data) => {
        if (isactive) {
          setPosts(data);
        }
      });
    return () => {
      setActive(false);
    };
  }, [reload]);

  return (
    <div className="Landing">
      <Container fluid>
        <Row>
          <Col md={10} className="Landing__BlogTile">
            {posts.map((value, index) => {
              return (
                <BlogTile
                  {...props}
                  key={index}
                  state={value}
                  initFetch={setReload}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
