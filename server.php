<?php

include("dbh.php");
if (isset($_POST['done'])) {

   $q_no1 = filter_var($_POST['q_no1'], FILTER_SANITIZE_STRING);
   $total_no1 = filter_var($_POST['q_total_no1'], FILTER_SANITIZE_STRING);
   $q_answer1 = filter_var($_POST['answer_1'], FILTER_SANITIZE_STRING);

   $q_no2 = filter_var($_POST['q_no2'], FILTER_SANITIZE_STRING);
   $total_no2 = filter_var($_POST['q_total_no2'], FILTER_SANITIZE_STRING);
   $q_answer2 = filter_var($_POST['answer_2'], FILTER_SANITIZE_STRING);

   $q_no3 = filter_var($_POST['q_no3'], FILTER_SANITIZE_STRING);
   $total_no3 = filter_var($_POST['q_total_no3'], FILTER_SANITIZE_STRING);
   $q_answer3 = filter_var($_POST['answer_3'], FILTER_SANITIZE_STRING);

   $q_no4 = filter_var($_POST['q_no4'], FILTER_SANITIZE_STRING);
   $total_no4 = filter_var($_POST['q_total_no4'], FILTER_SANITIZE_STRING);
   $q_answer4 = filter_var($_POST['answer_4'], FILTER_SANITIZE_STRING);

   $q_no5 = filter_var($_POST['q_no5'], FILTER_SANITIZE_STRING);
   $total_no5 = filter_var($_POST['q_total_no5'], FILTER_SANITIZE_STRING);
   $q_answer5 = filter_var($_POST['answer_5'], FILTER_SANITIZE_STRING);

   $q_no6 = filter_var($_POST['q_no6'], FILTER_SANITIZE_STRING);
   $total_no6 = filter_var($_POST['q_total_no6'], FILTER_SANITIZE_STRING);
   $q_answer6 = filter_var($_POST['answer_6'], FILTER_SANITIZE_STRING);

   $q_no7 = filter_var($_POST['q_no7'], FILTER_SANITIZE_STRING);
   $total_no7 = filter_var($_POST['q_total_no7'], FILTER_SANITIZE_STRING);
   $q_answer7 = filter_var($_POST['answer_7'], FILTER_SANITIZE_STRING);

   $q_no8 = filter_var($_POST['q_no8'], FILTER_SANITIZE_STRING);
   $total_no8 = filter_var($_POST['q_total_no8'], FILTER_SANITIZE_STRING);
   $q_answer8 = filter_var($_POST['answer_8'], FILTER_SANITIZE_STRING);

   $q_no9 = filter_var($_POST['q_no9'], FILTER_SANITIZE_STRING);
   $total_no9 = filter_var($_POST['q_total_no9'], FILTER_SANITIZE_STRING);
   $q_answer9 = filter_var($_POST['answer_9'], FILTER_SANITIZE_STRING);

   $q_no10 = filter_var($_POST['q_no10'], FILTER_SANITIZE_STRING);
   $total_no10 = filter_var($_POST['q_total_no10'], FILTER_SANITIZE_STRING);
   $q_answer10 = filter_var($_POST['answer_10'], FILTER_SANITIZE_STRING);

try {

  $stmt = $db->prepare("INSERT INTO users(Q1, TotalQ1, Answer1, Q2, TotalQ2, Answer2, Q3, TotalQ3, Answer3, Q4, TotalQ4, Answer4, Q5, TotalQ5, Answer5, Q6, TotalQ6, Answer6, Q7, TotalQ7, Answer7, Q8, TotalQ8, Answer8, Q9, TotalQ9, Answer9, Q10, TotalQ10, Answer10) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
  $stmt->execute(array($q_no1, $total_no1, $q_answer1, $q_no2, $total_no2, $q_answer2, $q_no3, $total_no3, $q_answer3, $q_no4, $total_no4, $q_answer4, $q_no5, $total_no5, $q_answer5, $q_no6, $total_no6, $q_answer6, $q_no7, $total_no7, $q_answer7, $q_no8, $total_no8, $q_answer8, $q_no9, $total_no9, $q_answer9, $q_no10, $total_no10, $q_answer10));

  echo json_encode(["message" => "success"]); // sends success response to front-end 

} catch (\Exception $e) {
  echo json_encode(["message" => $e->getMessage() ]); // sends error response to front-end
}


}
 ?>