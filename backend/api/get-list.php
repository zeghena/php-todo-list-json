<?php 


echo "Qui verrà stampata la lista";

$json_list_content = file_get_contents('../data/todolist.json');

header('Content-type: application/json');

echo $json_list_content;