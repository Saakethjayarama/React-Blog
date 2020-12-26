<?php

  include_once 'BlogDaoImpl.php';
  include_once 'Blog.php';

  $bdi = new BlogDaoImpl();
  $bdi->editBlog(new Blog(1, 'Subtle art of not giving f**k', 'The subtle art', null, 'Saaki'));
  

?>