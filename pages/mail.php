<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "contato@risaengenharia.com.br";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo"message send!";

?>