<?php

$json = file_get_contents('php://input');
$decodedVacancy = json_decode($json);

    $to      = 'a.kuzmin@ptech.ru, sale@ptech.ru';
    $subject = 'Заявка с сайта';
    $message = $json;
    $headers = 'From: noreply@torx.ru'       . "\r\n" .
                 'Reply-To: noreply@torx.ru' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    echo var_dump($json);
?>