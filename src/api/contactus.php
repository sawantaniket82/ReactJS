<?php
$host ="localhost";
$username="root";
$password="";
$dbname="ecommerce";

$con =mysqli_connect($host,$username,$password,$dbname);
$method=$_SERVER['GET'];
$request=explode('/',trim($_SERVER['PATH_INFO']),'/');

if(!$con){
  die("Connection Failed".mysqli_connect_error());
}

switch($method){
  case 'GET':
  $id = $_GET['id'];
  $sql = "select * from contacts".($id?" where id=$id":''); 
  break;
  case 'POST':
}
