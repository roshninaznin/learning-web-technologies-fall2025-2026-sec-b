<?php
    session_start();
    //print_r($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login Page</title>
    <link rel="stylesheet" href="login.css">

</head>
<body>
        <form id="login" action="../controllers/loginCheck.php" method="post" enctype="">
            <fieldset style="align:center;" >
            <legend>Login Page</legend>
            <table  id="table">
                <tr>
                    <td>Username</td>
                    <td><input type="text" name="username" value=""></td>
                </tr>
                <tr><br></tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password" value=""></td>
                </tr>
                 <tr><br></tr>

                <tr>
                    <td></td>
                    <td>
                        <input type="submit" id="sbt2" name="submit" value="Submit">
                        
                         <a href="signup.php"> Signup</a>
                    </td>
                </tr>
                 <tr><br></tr>

            </table>
            <br>

            </fieldset>
        </form>
</body>
</html>