function setOnClickHandlers() {
    let tableSizingButton = document.getElementById('tableSizingButton');
    let tableInputButton = document.getElementById('tableInputButton');
    let loadTableButton = document.getElementById('loadTable');
    let saveTableButton = document.getElementById('saveTable');
    let clearLocalStorageButton = document.getElementById('clearLocalStorage');

    tableSizingButton.addEventListener('click', event =>
        createTable(
            document.getElementById('customTable'),
            document.getElementById('columns').value,
            document.getElementById('rows').value
        ));
    tableInputButton.addEventListener('click', event =>
        addContentToCell(
            document.getElementsByTagName('table')[0],
            document.getElementById('column').value - 1,
            document.getElementById('row').value - 1,
            document.getElementById('tableCellContent').value
        ));
    loadTableButton.addEventListener('click', event =>
        loadTable(
            document.getElementById('customTable'),
            Number(localStorage.getItem('tableColumnsNumber')),
            Number(localStorage.getItem('tableRowsNumber'))
        ));
    saveTableButton.addEventListener('click', event => saveTable());
    clearLocalStorageButton.addEventListener('click', event => clearLocalStorage());
}

function createTable(parent, columnsNumber, rowsNumber) {
    let table = document.createElement('table');

    for (let i = 0; i < rowsNumber; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < columnsNumber; j++) {
            let td = document.createElement('td');

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    let gridTemplateColumns = 'minmax(100px, 250px)'.repeat(columnsNumber);

    table.style.setProperty('grid-template-columns', gridTemplateColumns);

    parent.appendChild(table);

    return table;
}

function addContentToCell(table, columnNumber, rowNumber, content) {
    let cell = table.rows[rowNumber].cells[columnNumber];

    cell.innerHTML = content;
}

function loadTable(parent, columnsNumber, rowsNumber) {
    let tableInfo = JSON.parse(localStorage.getItem('tableInfo'));

    let table = createTable(parent, columnsNumber, rowsNumber);

    tableInfo.forEach(cell => addContentToCell(table, cell.column, cell.row, cell.content));
}

function saveTable() {
    let table = document.getElementsByTagName('table')[0];
    let tableInfo = [];

    for (let rowNumber = 0; rowNumber < table.rows.length; rowNumber++) {
        for (let columnNumber = 0; columnNumber < table.rows[rowNumber].cells.length; columnNumber++) {
            let tableCellContent = table.rows[rowNumber].cells[columnNumber].innerHTML;

            if (tableCellContent.length !== 0) {
                let cellInformation = {
                    column: columnNumber,
                    row: rowNumber,
                    content: tableCellContent
                };

                tableInfo.push(cellInformation);
            }
        }
    }

    localStorage.setItem('tableInfo', JSON.stringify(tableInfo));
    localStorage.setItem('tableColumnsNumber', table.rows[0].cells.length.toString());
    localStorage.setItem('tableRowsNumber', table.rows.length.toString());
}

function clearLocalStorage() {
    localStorage.clear();
}
