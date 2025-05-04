<?php
$servername = "db";
$username = "root"; 
$password = "root_password"; 
$dbname = "customers_db"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$q = $_REQUEST['q'];

$sql = "SELECT * FROM customers WHERE customerid = '$q'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>CustomerID</th><th>CompanyName</th><th>ContactName</th><th>Address</th><th>City</th><th>PostalCode</th><th>Country</th></tr>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["customerid"] . "</td>";
        echo "<td>" . $row["companyname"] . "</td>";
        echo "<td>" . $row["contactname"] . "</td>";
        echo "<td>" . $row["address"] . "</td>";
        echo "<td>" . $row["city"] . "</td>";
        echo "<td>" . $row["postalcode"] . "</td>";
        echo "<td>" . $row["country"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "No se encontraron resultados para el ID proporcionado.";
}

$conn->close();
?>
