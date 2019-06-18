// from data.js
var tableData = data;
// console.log(data);


var tbody = d3.select("tbody");
var timeInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");
var searchBtn = d3.select("#filter-btn");


searchBtn.on("click", handleSearchButtonClick);

function buildtable(ufo_data){

tbody.html("");

ufo_data.forEach(function(sighting) {
    console.log(sighting)
    var row = tbody.append("tr")

    Object.entries(sighting).forEach(function([key, value]){
        console.log(`${key}, ${value}`)

        row.append("td").text(value)
    })
})
}

buildtable(data)


// *********Level 2 - Better Quality***********
function handleSearchButtonClick() {

    d3.event.preventDefault();

    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    // var filterDateTime = $timeInput.value.trim().toLowerCase();
    // var filterCity = $cityInput.value.trim().toLowerCase();
    // var filterCountry = $countryInput.value.trim().toLowerCase();
    // var filterState = $stateInput.value.trim().toLowerCase();
    // var filterShape = $shapeInput.value.trim().toLowerCase();

    var filterDateTime = timeInput.property("value");
    var filterCity = cityInput.property("value");
    var filterCountry = countryInput.property("value");
    var filterState = stateInput.property("value");
    var filterShape = shapeInput.property("value");
  
    // Set filteredDataSet to an array of all data whose fields matches the filter
    filteredData = data.filter(function(alienData) {
      var dateTimeField = alienData.datetime.toLowerCase();
      var cityField = alienData.city.toLowerCase();
      var stateField = alienData.state.toLowerCase();
      var countryField = alienData.country.toLowerCase();
      var shapeField = alienData.shape.toLowerCase();
  
      var allFields = 
        (filterDateTime === "" || dateTimeField === filterDateTime) &&
        (filterCity === "" || cityField === filterCity) &&
        (filterCountry === "" || countryField === filterCountry) &&
        (filterState === "" || stateField === filterState) &&
        (filterShape === "" || shapeField === filterShape);
      return allFields;
  
    });
    buildtable(filteredData);
  }



// ******level 1********

// var submit = d3.select("#filter-btn");

// submit.on("click", function() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");
//     // var city = d3.select("#city")
//     // var city = d3.select("#city")
//     // var city = d3.select("#city")
//     // var city = d3.select("#city")
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
//     // var inputValue = inputElement.property("value");
//     // var inputValue = inputElement.property("value");
//     // var inputValue = inputElement.property("value");
//     // var inputValue = inputElement.property("value");
  
//     console.log(inputValue);

//     var filteredData = tableData.filter(sighting => sighting.datetime ===inputValue)
//     console.log(filteredData)

//     buildtable(filteredData)

//   });


// ******level 2 (Basic)********

// var filters = {};

// function updatesearch() {
//     // set up inputs to have the same key as data
//     // d3.event.preventDefault();
//     var input = d3.select(this).select("input");
//     var value = input.property("value");
//     var filterID = input.attr("id");

//     if (value) {
//         filters[filterID] = value;
//     } else {
//         delete filters[filterID];
//     }
//     filtertable()
// }
// function filtertable() {
//     var new_data = tableData;
//     Object.entries(filters).forEach(function([key, value]){
//         console.log(`${key}, ${value}`)

//         new_data = new_data.filter(row => row[key] === value)

        
// });
// buildtable(new_data);
// }

// d3.select("#filter-btn").on("change", updatesearch);
