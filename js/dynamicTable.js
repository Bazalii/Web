function setOnClickHandlers() {
    let tableSizingButton = document.getElementById('tableSizingButton');
    let tableInputButton = document.getElementById('tableInputButton');

    tableSizingButton.addEventListener('click', event => createTable())
    tableInputButton.addEventListener('click', event => addContentToCell())
}

function createTable() {
    let parent = document.getElementById('customTable');
    let columns = document.getElementById('columns');
    let rows = document.getElementById('rows');

    let columnsNumber = Number(columns.value);
    let rowsNumber = Number(rows.value);

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
