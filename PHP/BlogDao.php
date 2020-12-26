<?php

  interface BlogDao {
    function getAllBlogs();
    function addBlog($blog);
    function editBlog($blog);
    function deleteBlog($id);
    function getBlogById($id);
  }

?>