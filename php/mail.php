<?php
require 'PHPMailerAutoload.php';
require_once('class.phpmailer.php');

$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data

// validate the variables ======================================================

	if (empty($_POST['first_name']))
		$errors['first_name'] = 'First name is required.';
	if (empty($_POST['last_name']))
		$errors['last_name'] = 'Last name is required.';
	if (empty($_POST['email']))
		$errors['email'] = 'Email is required.';
	if (empty($_POST['message']))
		$errors['message'] = 'Message is required.';

// return a response ===========================================================
	// response if there are errors
	if (!empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
		
	} else {
		$mail = new PHPMailer(); // create a new object
		$mail->IsSMTP(); // enable SMTP
		$mail->SMTPAuth = true; // authentication enabled
		$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 465; // or 587
		$mail->IsHTML(true);
		$mail->Username = "tyler@angert.com"; //Email that you setup
		$mail->Password = "rabbadabbadoo"; // Password
		$mail->Subject = "Mail from " . $_POST['last_name'] . ", e-mail: " .$_POST['email']. "";
		$mail->Body = $_POST['message'];
		$mail->AddAddress(""); //Pass the e-mail that you setup
		 
        if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        }
        else {
            $data['success'] = true;
            $data['message'] = 'Thank you for sending e-mail.';
        }
		
	}
	
echo json_encode($data);

?>