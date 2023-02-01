var counter = 1

var  b = document.getElementById('deselectButton');
var clickfun = function () {
    b.innerHTML = "Clicks: " + counter.toString();
    if (b.style.backgroundColor == 'red') b.style.backgroundColor = 'blue'
    else b.style.backgroundColor = 'red'
    counter += 1;
}

b.addEventListener("click", clickfun)

var getData = async function () {
    const data = await fetch("https://api3.binance.com/api/v3/ticker/price")
                .then(resp => resp.json())
    console.log(data)
    return(data)            
}

var setupGrid = async function () {
    const columnDefs = [
        { field: "symbol" },
        { field: "price" }
      ];

      
      const gridOptions = {
        columnDefs: columnDefs,
        rowData: []
      };

    // setup the grid after the page has finished loading
    document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    });
    
    const rowData = getData()
            .then(data => gridOptions.api.setRowData(data))


}

await setupGrid()