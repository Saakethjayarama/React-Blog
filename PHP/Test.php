<?php

  include_once 'BlogDaoImpl.php';
  include_once 'Blog.php';

  $bdi = new BlogDaoImpl();
  $bdi->deleteBlog(3);
  

?>