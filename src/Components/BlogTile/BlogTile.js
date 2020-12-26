import { Button } from "react-bootstrap";
import React from "react";
import "./BlogTile.css";

function BlogTile(props) {
  const { state, initFetch } = props;

  const handleDelete = () => {
    fetch(`http://localhost/delete.php?id=${state.id}`, {
      method: "DELETE",
    }).then(() => {
      initFetch(Math.random());
    });
  };

  return (
    <div className={props.admin ? "BlogTile BlogTile__minHeight" : "BlogTile"}>
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
      <div className="BlogTile__createdAt">{state.createdAt}</div>
      <hr />
      {props.admin ? (
        <>
          <div className="float-right">
            <Button variant="warning">Edit</Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default BlogTile;
