<?php
header('Content-Type: application/json');

include('db.php');
if(isset($_POST['login_btn']))
{
    $email_login = $_POST['email'];
    $password_login = $_POST['password'];
}
$query = "SELECT * FROM `user` WHERE `uname` = '$email_login' AND `password` = '$password_login'";
$query_runs = mysqli_query($conn,$query);

if ($query_runs->num_rows > 0) {
    // Convert results to array
    $data = array();
    while ($row = $query_runs->fetch_assoc()) {
      $data[] = $row;
    }
  
    // Return JSON response
    echo json_encode($data);
  } 

?>