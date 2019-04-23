<!doctype html>
<html lang="">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!--Google Font-->
<link href="" rel="stylesheet">
<!-- Bootstrap CSS -->
<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> -->
<!--Font Awesome-->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
<title>SURVEY</title>
<!-- Custom styles for this template -->
<link href="css/main.css" rel="stylesheet">
</head>
<body >
	<header>
		<div id="logo"><a href="index.php"></a></div>
	</header>
   <div class="container">
		<form name="ResultForm" method="post" action="result.php">
			<div id="question_area">
				<div id="q_no"></div>
				<div id="total_no"></div>
				<div id="question"></div>
				<div id="q_btn">
					<div id="q_answer1" class="btn left_b"><a></a></div>
					<div class="or">or</div>
					<div id="q_answer2" class="btn right_b"><a></a></div>
				</div>
			</div>
		</form>
      <div id="meter_area">
		<div class="percent">
			<div id="q_progress_bar" class="per10">-</div>
		</div>
	   </div>
	   <div id="data_area"></div>
	</div>
<footer>
	<a href=""></a>
	<a href=""></a>
	<p>Copyright (C) SkyLink all rights reserved.</p>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
