import React, { useState, useEffect } from "react";
import "./BlogForm.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function BlogForm(props) {
  const params = useParams();
  const history = useHistory();

  // auth
  const cookies = new Map(
    document.cookie.split("; ").map((v) => v.split("=").map(decodeURIComponent))
  );

  let payload = {};
  cookies.forEach((value, key) => {
    payload[key] = value;
  });

  if (!payload.loggedIn) {
    history.push("/");
  }

  const INITIAL_STATE = {
    title: "",
    description: "",
    author: "",
  };

  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const isDisabled =
    state.title === "" || state.description === "" || state.author === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.admin) {
      fetch("http://localhost/edit.php", {
        method: "PUT",
        body: JSON.stringify(state),
      }).then(() => {
        history.push(`/dashboard`);
      });
    } else {
      fetch("http://localhost/add.php", {
        method: "POST",
        body: JSON.stringify(state),
      }).then(() => {
        history.push("/dashboard");
      });
    }
  };

  const [isActive, setActive] = useState(true);
  useEffect(() => {
    setActive(true);
    if (props.admin) {
      fetch(`http://localhost/byId.php?id=${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (isActive) {
            const { title, description, author, id } = data;
            setState({ title, description, author, id });
          }
        });
    }
    return () => {
      setActive(false);
    };
  }, []);

  console.log(state);

  return (
    <div className="BlogForm">
      <Fab
        color="primary"
        aria-label="add"
        className="Dashboard__FabLogout"
        onClick={() => {
          setCookie("loggedIn", null, -1);
          history.push("/");
        }}
      >
        <ExitToAppIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="add"
        className="Dashboard__Fab"
        onClick={() => {
          history.push("/dashboard");
        }}
      >
        <DashboardIcon />
      </Fab>
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
              <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={state.author}
                  onChange={handleChange}
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
