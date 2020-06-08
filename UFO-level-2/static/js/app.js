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

button.on("click", runEnter);
function runEnter(){
    console.log("what")
    d3.event.preventDefault();
    var formdate = d3.select("#Date");
    var formcity = d3.select("#city");
    var formstate = d3.select("#state");
    var formcountry = d3.select("#country");
    var formshape = d3.select("#shape");
    var userDate=formdate.property("value");
    var usercity=formcity.property("value");
    var userstate=formstate.property("value");
    var usercountry=formcountry.property("value");
    var usershape=formshape.property("value");
    console.log(userDate);
    console.log(usercity);
    var filteredData = data;
    if (userDate){
        filteredData = filteredData.filter(sight =>sight.datetime === userDate );
    }
    if (usercity){
        filteredData = filteredData.filter(sight =>sight.city === usercity );
    }
    if (userstate){
        filteredData = filteredData.filter(sight =>sight.state === userstate );
    }
    if (usercountry){
        filteredData = filteredData.filter(sight =>sight.country === usercountry );
    }
    if (usershape){
        filteredData = filteredData.filter(sight =>sight.shape === usershape );
    }
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