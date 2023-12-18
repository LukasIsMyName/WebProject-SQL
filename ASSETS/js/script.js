
console.log("Js works!");

//Function to load xml document
function loadXMLDoc()
{
    //Requesting xml http
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {myFunction(this);} //If state and status is true, do this function ->
    };
    xmlhttp.open("GET","./ASSETS/xml/listings.xml",true) //Method is GET data, from url synchronously 
    xmlhttp.send(); //Sends the requests body
}


// Function that is responsible for receiving the data body
//and parsing the XML data by a specific tag to an HTML table 
//Takes one argument
function myFunction(xmlhttp)
{
    var xmlDoc = xmlhttp.responseXML;
    var table= "";
    var x = xmlDoc.getElementsByTagName("MOVIE"); //Only looking for a node MOVIE inside the data body
    for (var i = 0; i < x.length; i++) //Loop as long as i is less than MOVIE nodes inside the data body
    {   //Increment the table variable with rows of data
        table += "<tr><td>" + x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue 
        + "</td><td>" + x[i].getElementsByTagName("GENRE")[0].childNodes[0].nodeValue
        + "</td><td>" + x[i].getElementsByTagName("ACTOR")[0].childNodes[0].nodeValue
        + "</td><td>" + x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue
        + "</td><td>" + x[i].getElementsByTagName("SHOWING")[0].childNodes[0].nodeValue
        + "</td><td>" + x[i].getElementsByTagName("COST")[0].childNodes[0].nodeValue + "</td> </tr>";
    }
    document.getElementById("data").innerHTML = table; //Retrieve table body from HTML and insert new data from XML
}

function filter()
{
    //TODO
}

window.onload = loadXMLDoc(); //On load of website, calls this function
