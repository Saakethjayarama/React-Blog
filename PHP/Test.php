<?php

  include_once 'BlogDaoImpl.php';
  include_once 'Blog.php';

  $bdi = new BlogDaoImpl();
  echo $bdi->addBlog(new Blog(null, 'Eeee', 'eee', null, 'Saaketh'));

  

?>