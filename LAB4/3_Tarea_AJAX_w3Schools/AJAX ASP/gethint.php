<?php
// Array con los nombres
$a = array(
    "Anna", "Brittany", "Cinderella", "Diana", "Eva", "Fiona", "Gunda", "Hege", "Inga", "Johanna",
    "Kitty", "Linda", "Nina", "Ophelia", "Petunia", "Amanda", "Raquel", "Cindy", "Doris", "Eve",
    "Evita", "Sunniva", "Tove", "Unni", "Violet", "Liza", "Elizabeth", "Ellen", "Wenche", "Vicky"
);

// Obtener el parámetro 'q' de la URL
$q = isset($_REQUEST['q']) ? $_REQUEST['q'] : '';

// Inicializar variable de sugerencias
$hint = "";

// Buscar coincidencias
if (strlen($q) > 0) {
    foreach($a as $name) {
        if (stripos($name, $q) === 0) {  // Coincide si el nombre empieza con el texto de búsqueda
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Devolver las sugerencias o "no suggestion" si no hay coincidencias
echo $hint === "" ? "no suggestion" : $hint;
?>
