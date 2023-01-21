import {agGrid} from 'https://cdn.jsdelivr.net/npm/ag-grid-community/dist/ag-grid-community.min.noStyle.js';
import 'https://cdn.jsdelivr.net/npm/ag-grid-community/styles/ag-grid.css';
import 'https://cdn.jsdelivr.net/npm/ag-grid-community/styles/ag-theme-alpine.css';

// Function to demonstrate calling grid's API
function deselect(){
    var  b = document.getElementById('deselectButton');
    b.setAttribute('background-color','blue')
    gridOptions.api.deselectAll()
}

// Grid Options are properties passed to the grid
const gridOptions = {

  // each entry here represents one column
  columnDefs: [
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ],

  // default col def properties get applied to all columns
  defaultColDef: {sortable: true, filter: true},

  rowSelection: 'multiple', // allow rows to be selected
  animateRows: true, // have rows animate to new positions when sorted

  // example event handler
  onCellClicked: params => {
    console.log('cell was clicked', params)
  }
};

// get div to host the grid
const eGridDiv = document.getElementById("myGrid");
// new grid instance, passing in the hosting DIV and Grid Options
new agGrid.Grid(eGridDiv, gridOptions);

// Fetch data from server
fetch("https://www.ag-grid.com/example-assets/row-data.json")
.then(response => response.json())
.then(data => {
  // load fetched data into grid
  gridOptions.api.setRowData(data);
});