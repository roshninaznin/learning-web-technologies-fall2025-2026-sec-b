<?php
   require_once('../controllers/authCheck.php');
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User list</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
         <h1>Userlist </h1> <br>
        <a href="home.php">Back </a> |
        <a href="../controllers/logout.php">logout </a>
        <br><br>

        <table border=1>
            <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>ACTION</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Naznin</td>
                <td>roshninaznin202@gmail.com</td>
                <td>
                    <a href="edit.php"> EDIT </a> | 
                    <a href="delete.php"> DELETE </a> | 
                    <a href="details.php"> DETAILS </a> | 
                 </td>
            </tr>
        </table>
</body>
</html>