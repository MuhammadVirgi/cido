<?php
	header("Access-Control-Allow-Origin: *");
  extract($_POST);

  $c = new mysqli("localhost", "root","","cido");
  $sql = "SELECT * FROM customers WHERE username='$username' AND password='$password'";
	$us = array();
	$i=0;
	$result = $c->query($sql);
	while ($obj = $result->fetch_assoc()) {
		$us[$i]['id'] = $obj['id'];
		$us[$i]['username'] = addslashes(htmlentities($obj['username']));
		$us[$i]['password'] = $obj['password'];
		$i++;
	}	
	echo json_encode($us);
	$c->close();
?>