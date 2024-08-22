<?php

if(isset($_POST['submit'])){
    //Getting Students data
    $name = $_POST['fname'];
    $phone = $_POST['number'];
    $email = $_POST['email'];
    $messge = $_POST['input'];
    
    $mailto = "ansari.huzair12233@gmail.com"; //Email where contact information is received
    $subject = "Website Form Submission";
    $message = "Client Name: " .$name . "\n"
    . "Phone Number: " .$phone . "\n\n"
    . "Client Message: " .$messge ;
    $headers = "From: " .$email ;

    if(mail($mailto, $subject, $message, $headers)){
        echo "<h1>Sent Succesfully!";
    }
    else{
        echo "Please resend";
    }

}

?>