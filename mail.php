<?php 


if(isset($_POST['email']) && !empty($_POST['email'])) {

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);


$to = "contato@risaengenharia.com.br";
$subject = "Contato - teste";
$body = "Nome: " .$nome. "\n".
        "Email: " .$email. "\n".
        "mensagem: " .$mensagem;
$header = "From: contato@risaengenharia.com.br"."\r\n".
            "Reply-to:".$email."\e\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)) {

    echo("Email enviado com sucesso!");

}else {
    echo("O Email não pode ser enviado!");
}


}

?>