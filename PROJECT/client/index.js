document.addEventListener("DOMContentLoaded", function(){
loadHTMLTable([]);
}) 
// The event listener there for when the page loads it'll take all the data from the database and if there's no data it will display no data

function loadHTMLTable(data){
  const table = document.querySelector('table tbody')

if(data.length === 0){
table.innerHTML = "<tr><td class= 'no-data' colspan ='5'>No Data</td></tr>"
}
}