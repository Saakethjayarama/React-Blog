<?php
  class Blog {
    private $id;
    private $title;
    private $description;
    private $cratedAt;
    private $author;

    function __construct($id, $title, $description, $cratedAt, $author) {
      $this->id = $id;
      $this->title = $title;
      $this->description = $description;
      $this->cratedAt = $cratedAt;
      $this->author = $author;
    }

    function getId() {
      return $this->id;
    }
    function getTitle() {
      return $this->title;
    }
    function getDescription() {
      return $this->description;
    }
    function getCreatedAt() {
      return $this->cratedAt;
    }
    function getAuthor() {
      return $this->author;
    }

    function setId($id) {
      $this->id = $id;
    }
    function setTitle($title) {
      $this->title = $title;
    }
    function setDescription($description) {
      $this->description = $description;
    }
    function setCreatedAt($cratedAt) {
      $this->cratedAt = $cratedAt;
    }
    function setAuthor($author) {
      $this->author = $author;
    }

    function toArray() {
      return array(
        "id" => $this->id,
        "title" => $this->title,
        "description" => $this->description,
        "createdAt" => $this->cratedAt,
        "author" => $this->author
      );
    }
    
  }

?>