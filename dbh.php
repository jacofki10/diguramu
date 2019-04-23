<?php

$servername = "localhost";
$username = "digram-test";
$password = "sd93V2Fyf";
$dbname = 'digram_test_db';

try {

  $db = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
  catch(PDOException $e)
  {
    exit($e->getMessage());
  }

?>