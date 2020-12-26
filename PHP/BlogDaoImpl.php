<?php
  include_once 'Blog.php';
  include_once 'BlogDao.php';
  include_once 'JdbcUtil.php';
  

  class BlogDaoImpl implements BlogDao {
    function getAllBlogs() {
      $connection = JdbcUtil::getConnection();
      $sql = 'select * from blogs';

      $resultSet = $connection->query($sql);

      $blogs = [];
      if($resultSet->num_rows > 0) {
        while($row = $resultSet->fetch_assoc()) {
          $blogs[] = new Blog($row['id'], $row['title'], $row['description'], $row['created_at'], $row['author']);
        }
      }

      return $blogs;
      $connection->close();
    }

    function addBlog($blog) {
      $connection = JdbcUtil::getConnection();
      $sql = '';

      $connection->close();
    }

    function deleteBlog($id) {
      $connection = JdbcUtil::getConnection();
      $sql = '';

      $connection->close();
    }

    function getBlogById($id) {
      $connection = JdbcUtil::getConnection();
      $sql = '';

      $connection->close();
    }

  }

?>