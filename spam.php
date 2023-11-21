<?php
if(isset($_POST['email'])){
    $email = $_POST['email'];

    $msg = 'HIIIIIIIIII';

    $msg = wordwrap($msg,70, "\r\n");
    for($i = 0; $i <= 10; $i++){
        mail($email,'Me to You',$msg);
    }
}
?>