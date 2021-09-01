//Eliminar todos los inputs
function clearInputs(){
  document.getElementById('tableContent').innerHTML = '';
}

function addClient(){
  var rows = document.getElementById("clientsTable").rows.length -1;
  var tbodyRef = document.getElementById("clientsTable").getElementsByTagName('tbody')[0];

  // Insert a row at the end of table
  var newRow = tbodyRef.insertRow();

  // Insert a cell at the end of the row
  var newCell = newRow.insertCell();
  var newCell2 = newRow.insertCell();
  var newCell3 = newRow.insertCell();
  var newCell4 = newRow.insertCell();
  var newCell5 = newRow.insertCell();

  // Append a text node to the cell
  var row = document.createTextNode(rows + 1);
  var row2 = document.createTextNode(getClientName());
  var row3 = document.createTextNode(getClientAmount());

  newCell.appendChild(row);
  newCell2.appendChild(row2);
  newCell3.appendChild(row3);
  newCell4.innerHTML=sumOneButton();
  newCell5.innerHTML=removeButton();
}

//Recupera el nombre del cliente insertado y limpia el textbox
function getClientName(){
  var name = document.getElementById("nameInput").value;
  document.getElementById('nameInput').value = '';
  return name;
}

//Recupera la cantidad insertado y devuelve el valor a 0
function getClientAmount(){
  var amount = document.getElementById("amountInput").value;
  document.getElementById('amountInput').value = '0';
  return amount;
}

function removeButton(){
  return '<button type="button" class="btn btn-danger btn-sm px-3" onclick="removeRow()"><i class="fas fa-times"></i></button>';
}

function sumOneButton(){
  return '<button type="button" class="btn btn-success btn-sm px-3" onclick="sumOne()"><i class="fas fa-plus-circle"></i></button>';
}

function removeRow(){

}

function sumOneAll(){
var table = document.getElementById("clientsTable");
for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
   for (var j = 0, col; col = row.cells[j]; j++) {
     if(j==2 && i != 0){
       var amount = col.innerHTML;
       col.innerHTML = parseInt(amount) + 1;
     }
   }
}
}
