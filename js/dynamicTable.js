function setOnClickHandlers() {
    let tableSizingButton = document.getElementById('tableSizingButton');
    let tableInputButton = document.getElementById('tableInputButton');
    let loadTableButton = document.getElementById('loadTable');
    let saveTableButton = document.getElementById('saveTable');
    let clearLocalStorageButton = document.getElementById('clearLocalStorage');

    tableSizingButton.addEventListener('click', event => createTable());
    tableInputButton.addEventListener('click', event => addContentToCell());
    loadTableButton.addEventListener('click', event => loadTable());
    saveTableButton.addEventListener('click', event => saveTable());
    clearLocalStorageButton.addEventListener('click', event => clearLocalStorage());
}

function createTable() {
    let parent = document.getElementById('customTable');
    let columns = document.getElementById('columns').value;
    let rows = document.getElementById('rows').value;

    let columnsNumber = Number(columns);
    let rowsNumber = Number(rows);

    let table = document.createElement('table');

    for (let i = 0; i < rowsNumber; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < columnsNumber; j++) {
            let td = document.createElement('td');

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    let gridTemplateColumns = '';

    for (let i = 0; i < columnsNumber; i++) {
        gridTemplateColumns += 'minmax(100px, 250px)';
    }

    table.style.setProperty('grid-template-columns', gridTemplateColumns);

    parent.appendChild(table);

    localStorage.setItem('tableColumnsNumber', columns);
    localStorage.setItem('tableRowsNumber', rows);
}

function addContentToCell() {
    let table = document.getElementsByTagName('table')[0];

    let column = document.getElementById('column');
    let row = document.getElementById('row');
    let tableCellContent = document.getElementById('tableCellContent').value;

    let columnNumber = Number(column.value);
    let rowNumber = Number(row.value);

    let cell = table.rows[rowNumber - 1].cells[columnNumber - 1];

    cell.innerHTML = tableCellContent;
    cell.style.textAlign = 'center';
}

function loadTable() {
    let parent = document.getElementById('customTable');
    let columnsNumber = localStorage.getItem('tableColumnsNumber');
    let rowsNumber = localStorage.getItem('tableRowsNumber');

    let tableInfo = JSON.parse(localStorage.getItem('tableInfo'));

    let table = document.createElement('table');

    for (let i = 0; i < rowsNumber; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < columnsNumber; j++) {
            let td = document.createElement('td');

            td.innerHTML = tableInfo.find(element => element.column === j && element.row === i).content;

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    let gridTemplateColumns = '';

    for (let i = 0; i < columnsNumber; i++) {
        gridTemplateColumns += 'minmax(100px, 250px)';
    }

    table.style.setProperty('grid-template-columns', gridTemplateColumns);

    parent.appendChild(table);
}

function saveTable() {
    let table = document.getElementsByTagName('table')[0];
    let tableInfo = [];

    for (let rowNumber = 0; rowNumber < table.rows.length; rowNumber++) {
        for (let columnNumber = 0; columnNumber < table.rows[rowNumber].cells.length; columnNumber++) {
            let tableCellContent = table.rows[rowNumber].cells[columnNumber].innerHTML;

            let cellInformation = {
                column : columnNumber,
                row : rowNumber,
                content : tableCellContent
            };

            tableInfo.push(cellInformation);
        }
    }

    localStorage.setItem('tableInfo', JSON.stringify(tableInfo));
}

function clearLocalStorage() {
    localStorage.clear();
}
