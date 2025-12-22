<?php
$numbers = array(10, 20, 30, 40, 50);
$search = 100;
$found = false;

for ($i = 0; $i < count($numbers); $i++) {
    echo "$numbers[$i] <br>";
}
echo "Search Element is $search <br>";

for ($i = 0; $i < count($numbers); $i++) {
    if ($numbers[$i] == $search) {
        $found = true;
        break;
    }
}

if ($found) {
    echo "Element found <br><br>";
} else {
    echo "Element not found <br><br>";
}
?>
