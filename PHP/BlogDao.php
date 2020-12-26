<?php

  interface BlogDao {
    function getAllBlogs();
    function addBlog($blog);
    function deleteBlog($id);
    function getBlogById($id);
  }

?>