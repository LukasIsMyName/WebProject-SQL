// Globals
//Default movie ID
var movieID = 0;


//Function that upon call hides movies and displays dynamic booking page
function showBooking()
{
    console.log("I am on a booking page right now!");
    //Makes the booking div appear on click
    hideMovies();
    const targetDiv = document.getElementById("bookingdiv"); //Get the id
    targetDiv.style.display = "block"; //Change attribute using the temp variable

}

// Simple function that increases the index of movieID
//which then determines the output of the dynamic page
function showPrevious()
{
    const checkDiv = document.getElementById("bookingdiv");
    if (checkDiv.style.display == "block") //If booking page is displayed, do this ->
    {
        console.log("Can't go back, currently on booking page"); 
    }
    else //If booking page is not displayed, do this->
    {
        console.log("I am going to the previous movie");
        movieID--; //Decrement movieID since it's going backwards
        if(movieID < 0) //Error checking so it would not be a negative number
        {
            movieID = 4;
        }
        swapMovie(movieID); //Swap movie instantly after decrementing
        console.log(movieID);
    }
}

// Simple function that increases the index of movieID
//which then determines the output of the dynamic page
function showNext()
{
    const checkDiv = document.getElementById("bookingdiv");
    if (checkDiv.style.display == "block")
    {
        console.log("Can't go back, currently on booking page");
    }
    else
    {
        console.log("I am going to the next movie");
        movieID++;
        if(movieID >= 5)
        {
            movieID = 0;
        }
        swapMovie(movieID);
        console.log(movieID);
    }
}

//Resets the movie ID to default value
function setMovieID()
{
    console.log("Reset to default movie ID");
    if(movieID != 0)
    {movieID = 0;}
}

// Core function to swap movie elements using arrays of strings,
//such as images, paragraphs, videos
function swapMovie(id)
{
    //Arrays of strings
    const moviePictures = [
        "./Assets/pictures/pic7.jpg",
        "./Assets/pictures/pic1.jpg",
        "./Assets/pictures/pic2.jpg",
        "./Assets/pictures/pic3.jpg",
        "./Assets/pictures/pic4.jpg"
    ];

    const movieText = [
        "The plot revolves around King Leonidas (Gerard Butler), who leads 300 Spartans into battle against the Persian 'God-King' Xerxes (Rodrigo Santoro) and his invading army of more than 300,000 soldiers. As the battle rages, Queen Gorgo (Lena Headey) attempts to rally support in Sparta for her husband.",
        "Sauron, the Dark Lord, has awakened and threatens to conquer Middle-earth. To stop this ancient evil once and for all, Frodo Baggins must destroy the One Ring in the fires of Mount Doom. Men, Hobbits, a wizard, an Elf, and a Dwarf form a fellowship to help him on his quest.",
        "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion. Four siblings are sent away from home during the blitz of WWII. They are sent to be watched over by an old Professor Kirke, who owns a massive mansion.",
        "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
        "Based on Homer's 'Iliad', this epic portrays the battle between the ancient kingdoms of Troy and Sparta. While visiting Spartan King Menelaus (Brendan Gleeson), Trojan prince Paris (Orlando Bloom) falls for Menelaus' wife, Helen (Diane Kruger), and takes her back to Troy."
    ];

    const movieDemo = [
        "https://www.youtube.com/embed/4Prc1UfuokY?autoplay=1&mute=1",
        "https://www.youtube.com/embed/_nZdmwHrcnw?autoplay=1&mute=1",
        "https://www.youtube.com/embed/usEkWtuNn-w?autoplay=1&mute=1",
        "https://www.youtube.com/embed/9PSXjr1gbjc?autoplay=1&mute=1",
        "https://www.youtube.com/embed/znTLzRJimeY?autoplay=1&mute=1"
    ];

    const movieNames = [
        "300",
        "Lord of the Rings",
        "Chronicles of Narnia",
        "Hobbit",
        "Troy"
    ];

    // Switch statement cycling through cases depending on the
    //id parameter that's sent to the function
    switch(id)
    {
        case 0:
            document.getElementById("moviepic").src= moviePictures[id];
            document.getElementById("moviedescription").innerHTML = movieText[id];
            document.getElementById("bookingheader").innerHTML = movieNames[id];
            document.getElementById("moviedemo").src = movieDemo[id];
            document.getElementById("moviename").value = movieNames[id];
            document.getElementById("movietitle").innerHTML = movieNames[id];
            break;
        case 1:
            document.getElementById("moviepic").src= moviePictures[id];
            document.getElementById("moviedescription").innerHTML = movieText[id];
            document.getElementById("moviedemo").src = movieDemo[id];
            document.getElementById("bookingheader").innerHTML = movieNames[id];
            document.getElementById("moviename").value = movieNames[id];
            document.getElementById("movietitle").innerHTML = movieNames[id];
            break;
        case 2:
            document.getElementById("moviepic").src= moviePictures[id];
            document.getElementById("moviedescription").innerHTML = movieText[id];
            document.getElementById("moviedemo").src = movieDemo[id];
            document.getElementById("bookingheader").innerHTML = movieNames[id];
            document.getElementById("moviename").value = movieNames[id];
            document.getElementById("movietitle").innerHTML = movieNames[id];
            break;
        case 3:
            document.getElementById("moviepic").src= moviePictures[id];
            document.getElementById("moviedescription").innerHTML = movieText[id];
            document.getElementById("moviedemo").src = movieDemo[id];
            document.getElementById("bookingheader").innerHTML = movieNames[id];
            document.getElementById("moviename").value = movieNames[id];
            document.getElementById("movietitle").innerHTML = movieNames[id];
            break;
        case 4:
            document.getElementById("moviepic").src= moviePictures[id];
            document.getElementById("moviedescription").innerHTML = movieText[id];
            document.getElementById("moviedemo").src = movieDemo[id];
            document.getElementById("bookingheader").innerHTML = movieNames[id];
            document.getElementById("moviename").value = movieNames[id];
            document.getElementById("movietitle").innerHTML = movieNames[id];
            break;
    }
}

//Function that is responsible for hiding the movie listings upon call
function hideMovies()
{
    var hideMovie = document.getElementById("moviepic");
    hideMovie.style.visibility = 'hidden';
    var hideText = document.getElementById("moviedescription");
    hideText.style.display = 'none';
    var hideDemo = document.getElementById("moviedemo");
    hideDemo.style.display = 'none';
    var hideTitle = document.getElementById("movietitle");
    hideTitle.style.display = 'none';
}
