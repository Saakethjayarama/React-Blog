import { Button } from "react-bootstrap";
import React from "react";
import "./BlogTile.css";

function BlogTile(props) {
  return (
    <div className={props.admin ? "BlogTile BlogTile__minHeight" : "BlogTile"}>
      <div className="BlogTile__header BlogTile__contentTile">Code</div>
      <div className="BlogTile__body BlogTile__contentTile">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae
        maiores enim sed quibusdam quidem reiciendis repellat veniam expedita
        voluptas aperiam, natus laudantium suscipit voluptate, laborum beatae
        optio vel nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Asperiores laboriosam eius et dolor dolores quo, qui vero animi
        maiores obcaecati voluptate consequuntur enim totam perferendis! Placeat
        nesciunt fugiat molestiae similique? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Blanditiis, ducimus deleniti. Obcaecati
        eos magni harum molestiae rem, similique cupiditate quae? Ut officiis
        saepe ex quisquam nihil eos accusantium. Sapiente, nobis.
      </div>
      <hr />
      {props.admin ? (
        <div className="float-right">
          <Button variant="warning">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      ) : null}
    </div>
  );
}

export default BlogTile;
