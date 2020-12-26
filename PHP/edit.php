<?php
    include_once 'Blog.php';
    include_once 'BlogDaoImpl.php';

    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    
    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'OPTIONS'){
        http_response_code(200);
    }else
    if($method == 'PUT') {
      $data = json_decode(file_get_contents('php://input'), true);
      
      $bdi = new BlogDaoImpl();
      
      $blog = new Blog($data['id'], $data['title'], $data['description'], null, $data['author']);
      $bdi->editBlog($blog);
      
      http_response_code(200);
      echo json_encode(array("message" => "done!"));
    }else{
        http_response_code(405);
        echo (json_encode(array("message"=>"method not allowed")));
    }
    
?>