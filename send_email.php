<?php
if (isset($_POST['submit'])) {
    $to = "abdikarimburaleh1@gmail.com";
    $subject = "New contact form submission";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: $name <$email>";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Email sending failed.";
    }
}
?>
