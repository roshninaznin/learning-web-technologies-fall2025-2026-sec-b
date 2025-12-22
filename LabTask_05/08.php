<?php
$shapes = array(
    array(1, 2, 3, 'A'),
    array(1, 2, 'B', 'C'),
    array(1, 'D', 'E', 'F')
);

echo " Print using nested loop <br>";
for ($i = 0; $i < count($shapes); $i++) {
    for ($j = 0; $j < count($shapes[$i]); $j++) {
        echo $shapes[$i][$j] . " ";
    }
    echo "<br>";
}
echo "<br>";

echo " Print numbers using nested loop <br>";
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3 - $i; $j++) {
        echo $shapes[$i][$j];
    }
    echo "<br>";
}

echo "<br>";

echo " Print alphabets using nested <br>";
echo $shapes[0][3] . "<br>";
echo $shapes[1][2] . " " . $shapes[1][3] . "<br>";
echo $shapes[2][1] . " " . $shapes[2][2] . " " . $shapes[2][3] . "<br>";
?>
