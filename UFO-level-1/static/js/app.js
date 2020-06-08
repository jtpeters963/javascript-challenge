// from data.js
var tableData = data;
var tbody =d3.select("tbody");
data.forEach(function(sighting){
    var row=tbody.append("tr");
    Object.entries(sighting).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    }) 
})


var button = d3.select("#filter-btn");
var form = d3.select("#datetime");


form.on("keyup", runEnter);
button.on("click", runEnter);
function runEnter(){
    console.log("what")
    d3.event.preventDefault();
    var formdate = d3.select("#datetime");
    var userDate=formdate.property("value");
    console.log(userDate);
    var filteredData = data.filter(sight =>sight.datetime === userDate );
    console.log(filteredData);
    tbody.html("");
    filteredData.forEach(function(sighting){
        var row=tbody.append("tr");
        Object.entries(sighting).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        }) 
    })
}