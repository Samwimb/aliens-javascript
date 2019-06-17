// from data.js
var tableData = data;
// console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
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
var submit = d3.select("#filter-btn");

buildtable(data)

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // var city = d3.select("#city")
    // var city = d3.select("#city")
    // var city = d3.select("#city")
    // var city = d3.select("#city")
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");
  
    // d3.select(this).select("input")
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime ===inputValue)
    // var filteredData = people.filter(person => person.bloodType === inputValue);
    console.log(filteredData)

    buildtable(filteredData)
    // Set the span tag in the h1 element to the text
    // that was entered in the form
    // d3.select("h1>span").text(inputValue);
  });
var filters = {}

function updatesearch() {
    // set up inputs to have the same key as data
    var input = d3.select(this).select("input")
    var value = input.property("value")
    var filterID = input.attr("id")

    if (value) {
        filters[filterID] = value
    } else {
        delete filters[filterID]
    }
    filtertable()
}
function filtertable() {
    var new_data = tableData
    Object.entries(filters).forEach(function([key, value]){
        console.log(`${key}, ${value}`)

        new_data = new_data.filter(row => row[key] === value)

        
})
buildtable(new_data)
}

d3.selectAll(".filter").on("change", updatesearch)