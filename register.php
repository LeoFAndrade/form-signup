<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "y_social_network";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];

$day = sprintf('%02d', $_REQUEST['day']);
$month = sprintf('%02d', $_REQUEST['month']);
$year = sprintf('%04d', $_REQUEST['year']);

$date = "$year-$month-$day";

$gender = $_REQUEST['gender'];
$email = $_REQUEST['email'];
$password = $_REQUEST['pwd'];

$sql = "INSERT INTO users VALUES (null, '$name', '$surname', '$date', '$gender', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Cadastrado com Sucesso!";
} else {
  echo "Erro: " . $sql . "<br>" . $conn->error;
}

?>

