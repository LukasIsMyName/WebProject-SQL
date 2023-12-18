<?php
    echo 'PHP version: ' . phpversion() . '<br><br>';
    if(isset($_POST['submit']))
    {
        $movie = $_REQUEST['moviename'];
        $date = $_POST['date'];
        $email = $_POST['email'];
    }
    
    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $dbname = "movies";

    // Create connection
    $conn = mysqli_connect($servername, $username, '', $dbname);
    //Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else
        echo 'Connected<br><br>';
    // to ensure that the connection is made
    if (!$conn)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    $sql = "INSERT INTO booking (id, movie, datetime, email) VALUES ('0','$movie','$date','$email')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($conn, $sql);
    if($rs)
    {
        echo "Entries added!<br><br>";
        echo '<script>alert("Succesfully booked!")</script>'; //Alert that booking was succesful
        echo '<script type="text/javascript"> 
        window.location.href="http://localhost/CA1/index.html"</script>'; //Redirects to url, i.e index page
        
    }
  
    // close connection
    mysqli_close($conn);
    
    
?>