<?php 


// leggiamo il contenuto del file json sotto forma di stringa
$json_list_content = file_get_contents('../data/todolist.json');

// avvisiamo il browser che riceverà del json
header('Content-Type: application/json');

// stampiamo il contenuto
echo $json_list_content;