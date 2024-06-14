document.getElementById("toggle3rdTd").addEventListener("click", function () {
  // Get all table rows
  var rows = document.querySelectorAll("table tr");
  rows.forEach(function (row) {
    // Toggle the 3rd td element
    row.children[2].classList.toggle("hidden");
  });
  document.getElementById("toggle3rdTd").classList.toggle("stroke");
});

document.getElementById("toggle4thTd").addEventListener("click", function () {
  // Get all table rows
  var rows = document.querySelectorAll("table tr");
  rows.forEach(function (row) {
    // Toggle the 4th td element
    row.children[3].classList.toggle("hidden");
  });
  document.getElementById("toggle4thTd").classList.toggle("stroke");
});

console.log("Hello world");
