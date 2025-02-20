<?php
// Récupérer les données du formulaire
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// URL de Formspree (remplacez par votre URL)
$formspree_url = "https://formspree.io/f/xjkgjqvv";

// Préparer les données à envoyer
$data = [
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message
];

// Initialiser cURL
$ch = curl_init($formspree_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Exécuter la requête
$response = curl_exec($ch);
curl_close($ch);

// Vérifier si l'envoi a réussi
if ($response === false) {
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du formulaire.']);
} else {
    echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès.']);
}
?>