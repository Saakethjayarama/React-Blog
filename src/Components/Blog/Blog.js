import React, { useState, useEffect } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const history = useHistory();
  const params = useParams();

  // get all posts
  const [isactive, setActive] = useState(true);
  const [posts, setPosts] = useState([]);

  // current post
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    setActive(true);
    fetch("http://localhost/get.php")
      .then((res) => res.json())
      .then((data) => {
        if (isactive) {
          setPosts(data);
        }
        const thisPost = data.filter((x) => x.id === params.id)[0];
        setTitle(thisPost.title);
        setDescription(thisPost.description);
        setAuthor(thisPost.author);
      });
    return () => {
      setActive(false);
    };
  }, [params.id]);

  return (
    <div className="Blog">
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col md={8}>
            <div className="Blog__Title">{title === "" ? null : title}</div>
            <div className="Blog_Body">
              {description === "" ? null : description}
            </div>
            <div className="Blog__Author">
              {author === "" ? null : `- ${author}`}
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={2}>
            <ListGroup>
              {posts.map((value, index) => {
                return (
                  <ListGroup.Item
                    action
                    onClick={() => {
                      history.push(`/blog/${value.id}`);
                    }}
                    key={index}
                  >
                    {value.title}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
