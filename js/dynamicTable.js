function setOnClickHandlers() {
    let inputButton = document.getElementById('inputButton');

    inputButton.addEventListener('click', event => createTable())
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
