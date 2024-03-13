//Declare a variable to store the main element
//Changes:I integrated the code of A4 into a method, and passed in a parameter result, and changed the name of the related variable
let mainElement = document.getElementsByTagName("main")[0];
function findFlights(result) {
  for (let i = 0; i < result.length; i++) {
    //Create 8 boards to show the flight
    let table = document.createElement("section");
    table.className = "flight-availability-info";

    //Create a html h2 tag to show the destination info
    let dest = document.createElement("h2");
    dest.innerHTML = result[i].destination;
    table.appendChild(dest);

    //Create a html p tag to show the stops and time info
    let stopsAndTime = document.createElement("p");
    if (result[i].stops !== 0) {
      stopsAndTime.innerHTML = result[i].stops + ", " + result[i].time + " min";
    } else {
      stopsAndTime.innerHTML = "Non-stop" + ", " + result[i].time + " min";
    }
    stopsAndTime.className = "stops-and-time";
    table.appendChild(stopsAndTime);

    //Create a html p tag to show the departure time info
    let depart = document.createElement("p");
    depart.innerHTML = "Depart time: " + result[i].departTime;
    table.appendChild(depart);
    depart.className = "stops-and-time";

    //Create a html ul tag and 3 li tags to show the details of flight
    let detailList = document.createElement("ul");
    detailList.className = "flight-info";
    let airline = document.createElement("li");
    airline.innerHTML = "Airline: " + result[i].airline;
    let airport = document.createElement("li");
    airport.innerHTML = "Airport: " + result[i].airport;
    let details = document.createElement("li");
    details.innerHTML = "Details: " + result[i].info;
    detailList.appendChild(airline);
    detailList.appendChild(airport);
    detailList.appendChild(details);
    table.appendChild(detailList);

    //Create a select button,when user hits the button,the flight code and destination will be written in the aside named "flight selection bag".
    let selectButton = document.createElement("button");
    selectButton.innerHTML = "Select";
    selectButton.addEventListener("click", function () {
      let flightSelectionBag = document.getElementsByClassName(
        "flights-selection-bag"
      )[0];
      let text = document.createElement("p");
      text.innerHTML =
        "Flight " + result[i].code + " to " + result[i].destination + " added";
      flightSelectionBag.appendChild(text);
    });

    //Put select button into table
    table.appendChild(selectButton);

    //Put table into main element
    mainElement.appendChild(table);
  }
}
