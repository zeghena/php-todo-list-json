<?php 


// leggiamo il contenuto del file json sotto forma di stringa
$json_tasklist = file_get_contents('../data/tasklist.json');

// avvisiamo il browser che riceverà del json
header('Content-Type: application/json charset=utf-8');

// stampiamo il contenuto
echo $json_tasklist;