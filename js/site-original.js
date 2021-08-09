window.onload = () => {
    document.querySelector('#btnSubmit').addEventListener('click', getValues);
};

function getValues() {
    // get values from user input
    let fizz = document.querySelector('#txtFizz').value;
    let buzz = document.querySelector('#txtBuzz').value;

    // clear data from table
    document.querySelector('#tableResults').innerHTML = '';

    // convert values to integer
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    // validate numbers
    if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
        // generate the numbers
        let result = FizzBuzz(fizz, buzz);

        // display the numbers
        displayData(result);
    } else {
        const alert = document.querySelector('#alert');
        alert.classList.remove('d-none');
        document.querySelector('#alertMsg').innerHTML = 'Integer values required for fizz and buzz.';
        setTimeout(() => {
            alert.classList.add('d-none');
        }, 3000);
    }
}

function FizzBuzz(fizz, buzz) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        let val = i;
        if (i % fizz == 0 && i % buzz == 0) {
            val = 'FizzBuzz';
        } else if (i % fizz == 0) {
            val = 'Fizz';
        } else if (i % buzz == 0) {
            val = 'Buzz';
        } else {
            val = i;
        }
        returnArray.push(val);
    }
    return returnArray;
}

function displayData(data) {
    let tableRows = '';

    for (let i = 0; i < data.length; i += 5) {
        let cells = '';

        for (let j = 0; j <= 4; j++) {
            let className = String(data[i + j]);
            cells += `<td class="${className}">${data[i + j]}</td>`;
        }

        let row = `<tr>${cells}</tr>`;
        tableRows += row;
    }

    document.querySelector('#tableResults').innerHTML = tableRows;
}
