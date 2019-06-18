// from data.js
var tableData = data;
// console.log(data);


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
// var submit = d3.select("#filter-btn");

buildtable(data)

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
var filters = {};

function updatesearch() {
    // set up inputs to have the same key as data
    // d3.event.preventDefault();
    var input = d3.select(this).select("input");
    var value = input.property("value");
    var filterID = input.attr("id");

    if (value) {
        filters[filterID] = value;
    } else {
        delete filters[filterID];
    }
    filtertable()
}
function filtertable() {
    var new_data = tableData;
    Object.entries(filters).forEach(function([key, value]){
        console.log(`${key}, ${value}`)

        new_data = new_data.filter(row => row[key] === value)

        
});
buildtable(new_data);
}

d3.select("#filter-btn").on("change", updatesearch);
