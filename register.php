<?php

//Server declared as POST 
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  //Server Variables
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "y_social_network";

  //Server Connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  //Server Connection Validation
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  //Table Insertion Framework
  $sql = "INSERT INTO users (name, surname, day_of_birth, gender, email, password) VALUES (?, ?, ?, ?, ?, ?)";

  //Sanitization
  $name = htmlspecialchars(trim($_POST['name']));
  $surname = htmlspecialchars(trim($_POST['surname']));

  //Validation of empty fields
  if (
    empty($name) || empty($surname) || empty($_POST['day']) ||
    empty($_POST['month']) || empty($_POST['year']) ||
    empty($_POST['gender']) || empty($_POST['email']) || empty($_POST['pwd'])
  ) {
    die("Todos os campos são obrigatórios.");
  }

  //Date
  $day = sprintf('%02d', $_POST['day']);
  $month = sprintf('%02d', $_POST['month']);
  $year = sprintf('%04d', $_POST['year']);

  //Date Validation
  if (!checkdate((int) $month, (int) $day, (int) $year)) {
    die("Data inserida inválida.");
  }

  $date = "$year-$month-$day";

  //Gender validation
  $gender = $_POST['gender'];
  $valid_genders = ['Masculino', 'Feminino', 'Outro'];
  if (!in_array($gender, $valid_genders)) {
    die("Gênero inválido.");
  }

  //Email validation
  $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
  if (!$email) {
    die("E-mail inválido.");
  }

  //Check if the email already exists
  $checkEmail = $conn->prepare("SELECT id FROM users WHERE email = ?");
  $checkEmail->bind_param("s", $email);
  $checkEmail->execute();

  $resultado = $checkEmail->get_result();

  if ($resultado->num_rows > 0) {
    die("Este e-mail já está cadastrado!");
  }

  $checkEmail->close();

  //Password Hash
  $password_hash = password_hash($_POST['pwd'], PASSWORD_DEFAULT);

  //Insert prepared statement
  if ($stmt = $conn->prepare($sql)) {
    $stmt->bind_param('ssssss', $name, $surname, $date, $gender, $email, $password_hash);

    $stmt->execute();
    echo "Cadastrado com sucesso!";

  } else {
    echo "Erro ao cadastrar: " . $conn->error;
  }

  //Closes connections 
  $stmt->close();
  $conn->close();
}
?>