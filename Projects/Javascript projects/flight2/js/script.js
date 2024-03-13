//Create some elements to add a search bar
let searchBar = document.createElement("aside");
let searchInputLabel = document.createElement("label");
let searchInput = document.createElement("input");
let searchForm = document.createElement("form");
let searchButton = document.createElement("button");

searchForm.appendChild(searchInputLabel);
searchForm.appendChild(searchInput);
searchBar.appendChild(searchForm);
searchBar.appendChild(searchButton);

//Give these elements some attributes and values
searchBar.id = "searchAside0";
searchInputLabel.innerText = "Search for flights to add: ";
searchInputLabel.setAttribute("for","searchInput");
searchInput.type = "text";
searchInput.id = "searchInput";
searchInput.name = "searchInput";
searchInput.placeholder = "Search using flight destination or airport";
searchForm.id = "searchForm0";
searchButton.innerText = "Find Flight(s)";

//Add an event listener to the button
searchButton.addEventListener("click",searchDeal);
    function searchDeal(){
    let searchInput1 = document.getElementById("searchInput");
    let searchValue = searchInput1.value;
    searchValue = searchValue.trim();
    console.log(searchValue);
    searchValue = searchValue.toLowerCase();
    console.log(searchValue);

    //Declare an array to store the matching flights
    let searchResult = [];

    if(searchValue !== ""){
        for(let i=0; i<FlightInfo.length; i++){
            let dest = FlightInfo[i].destination.toLowerCase();
            let airfield = FlightInfo[i].airport.toLowerCase();
            if(dest.includes(searchValue) || airfield.includes(searchValue)){
                searchResult.push(FlightInfo[i]);
            }else{
                document.getElementsByClassName("container")[0].innerHTML = "";
            }
        }
    }else{
        document.getElementsByClassName("container")[0].innerHTML = "";
    }
    if(searchResult.length !== 0){
        findFlights(searchResult);
    }else{
        //Print error alert if no matching flights
        console.log("Sorry! Flight does not exist");
    }
}

//Add all elements to page
mainElement.before(searchBar);