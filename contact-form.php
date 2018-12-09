<? 
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mail_from = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    # code...
    $mailTo = 'hi@techinary.com';
    $headers = 'From: '.$mail_from;
    $txt = 'you have recieved a message from '.$name .'with message ..'
.$message .'with phone number' .$phone;

    mail($mailTo, $subject, $txt, $headers);
    header("location: index.php?mailsend");


}
?>
