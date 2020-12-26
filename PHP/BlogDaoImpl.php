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
      $sql = 'insert into blogs(title, description, author) values(?, ?, ?)';
      $statement = $connection->prepare($sql);

      $title = $blog->getTitle();
      $description = $blog->getDescription();
      $author = $blog->getAuthor();

      $statement->bind_param('sss', $title, $description, $author);
      $statement->execute();

      $n = $connection->insert_id;
      $connection->close();

      return $n;
    }

    function deleteBlog($id) {
      $connection = JdbcUtil::getConnection();
      $sql = 'delete from blogs where id = ?';

      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $id);
      $statement->execute();

      $connection->close();
    }

    function getBlogById($id) {
      $connection = JdbcUtil::getConnection();
      $sql = 'select * from blogs where id = *';

      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $id);
      
      $blog = null;
      if($statement->execute()) {
        $statement->bind_result($id, $title, $description, $createdAt, $author);
        if($statement->fetch()) {
          $blog = new Blog($id, $title, $description, $createdAt, $author);
        }
      }
      
      $connection->close();
      return $blog;
    }

  }

?>