/* 
Author: Spencer Wagner 
Date: 5/3/2021
Description: Builds a 4x4 table that is navigable via the arrow keys and can be
marked by clicking on a cell
*/

/* ------------------------------------------
GENERATE PAGE
--------------------------------------------- */

// Create the table and append it to the DOM
var tbl = document.createElement("table");
tbl.style.border = "1px solid black";
tbl.setAttribute("id", "pageTable");
genTable(tbl);
genTableHead(tbl);

// Generate directional buttons
dirButton("Up");
dirButton("Down");
dirButton("Left");
dirButton("Right");

// Set up initially bold cell
var slctRow = 1;
var slctCol = 0;
highlightCell();

// Generate modify cell button
modifyButton();


/* ------------------------------------
FUNCTIONS FOR PAGE GENERATION
--------------------------------------- */

/* GENERATE THE TABLE */

// Create the table header
function genTableHead(table) {
  var tHead = table.createTHead();
  var row = tHead.insertRow();

  // Create one row with table head elements
  for (var i = 1; i <= 4; i++) {
    var th = document.createElement("th");
    th.style.border = "1px solid black";
    th.style.padding = "5px";
    th.style.textAlign = "center";
    th.textContent = "Header " + String(i);
    row.appendChild(th);
  }
  document.body.appendChild(table)
}

// Create table data
function genTable(table) {
  // Create the rows
  for (i = 1; i <= 3; i++) {
    table.createTBody;
    var row = table.insertRow();

    // Create the cells per row
    for (j = 1; j <= 4; j++) {
      var cell = row.insertCell();
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
      cell.style.textAlign = "center";
      cell.textContent = String(i) + ", " + String(j);
    }
  }
}


/* MAKE SELECTABLE CELLS */
function highlightCell(direction=null) {
  // Row and cell modifiers
  var rowChange = 0;
  var colChange = 0;

  // Decrement selected row val unless already at top of table
  if (direction == "Up") {
    if (slctRow <= 1);
    else {
      rowChange = -1;
    }
  }
  // Increment selected row val unless at bottom of table
  else if (direction == "Down") {
    if (slctRow >= 3);
    else {
      rowChange = 1;
    }
  }
  // Decrement selected column val unless already at leftmost column
  else if (direction == "Left") {
    if (slctCol <= 0);
    else {
      colChange = -1;
    }
  }
  // Increment selected column val unless already at rightmost column
  else if (direction == "Right") {
    if (slctCol >= 3);
    else {
      colChange = 1;
    }
  }

  // Update previously selected style to non-bold
  document.getElementById("pageTable").rows[slctRow].cells[slctCol].style.border="1px solid black";

  // Change selected row/col and update to bold
  slctRow += rowChange;
  slctCol += colChange;
  document.getElementById("pageTable").rows[slctRow].cells[slctCol].style.border="2px solid black";

}


// Create directional buttons
function dirButton(name) {
  var button = document.createElement("button");
  button.innerHTML = name;
  button.style.display = "inline-block"; 
  document.body.appendChild(button);
  button.addEventListener('click', function(){
    highlightCell(name);
  });
}


/* MODIFY CELLS */

// Modify cell button creation
function modifyButton() {
  var button = document.createElement("button");
  button.innerHTML = "Modify Cell";
  button.style.display = "block";
  button.style.margin = "10px";
  button.style.padding = "10px";
  document.body.appendChild(button);
  button.addEventListener('click', function() {
    modifyCell();
  });
}

// Modify cell function - permanently change the background of the selected cell
function modifyCell() {
  document.getElementById("pageTable").rows[slctRow].cells[slctCol].style.background="yellow";
}