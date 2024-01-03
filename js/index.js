// Динамічно створити таблицю множення 10х10 і додати на сторінку. Стилізувати таблицю за власним смаком, додавши таблиці відповідний клас і стилі в css файлі.

// Ніякого хардкодинга! Розмірність таблиці має бути легко змінити
// Динамічно створюємо таблицю множення
const containerDiv = document.createElement('div');
containerDiv.className = 'container';
const title = document.createElement('h1');
title.className = "title";
title.textContent = "Таблиця множення"
function createTable(rows, cols) {
    const table = document.createElement('table');
    table.className = 'table-container';

    for (let i = 1; i <= rows; i++) {
        const row = table.insertRow();

        for (let j = 1; j <= cols; j++) {
            const cell = row.insertCell();
            cell.className = 'table-cell';

            if (i === 1 || j === 1) {
                cell.className += ' table-header';
            }

            cell.textContent = i * j;
        }
    }

    return table;
}
containerDiv.appendChild(title);
containerDiv.appendChild(createTable(10, 10));
document.body.appendChild(containerDiv);

