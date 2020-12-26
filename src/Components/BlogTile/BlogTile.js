import { Button } from "react-bootstrap";
import React from "react";
import "./BlogTile.css";
import { useHistory } from "react-router-dom";

function BlogTile(props) {
  const history = useHistory();

  const { state, initFetch } = props;

  const handleDelete = () => {
    fetch(`http://localhost/delete.php?id=${state.id}`, {
      method: "DELETE",
    }).then(() => {
      initFetch(Math.random());
    });
  };

  return (
    <div
      className={props.admin ? "BlogTile BlogTile__minHeight" : "BlogTile"}
      onClick={() => {
        history.push(`/blog/${state.id}`);
      }}
    >
      <div className="BlogTile__header BlogTile__contentTile">
        {state.title}
      </div>
      <div className="BlogTile__body BlogTile__contentTile">
        {state.description}
      </div>
      <div className="BlogTile__contentTile BlogTile__author">
        <p>- {state.author}</p>
      </div>
      <hr />

      {props.admin ? (
        <>
          <div className="BlogTile__Actions">
            <Button variant="warning">Edit</Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="BlogTile__createdAt">{state.createdAt}</div>
          <hr />
        </>
      )}
    </div>
  );
}

export default BlogTile;
