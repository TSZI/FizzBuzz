function getValues() {
    // get the user values (fizz and buzz) from form
    let fizzValue = document.querySelector('#txtFizz').value;
    let buzzValue = document.querySelector('#txtBuzz').value;

    // check for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // call fizzbuzz
        let fbArray = fizzBuzzC(fizzValue, buzzValue);

        // call display and write values to screen
        displayData(fbArray);
    } else {
        alert('You must enter integer values');
    }
}

// Using the If statement
function fizzBuzzA(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        // if divisible by both (fizz and buzz)
        // if divisible by just (fizz)
        // if divisible by just (buzz)
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }

    return returnArray;
}

// Using the Switch statement
function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch (true) {
            case Fizz && Buzz: {
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz: {
                returnArray.push('Buzz');
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

// Using the Ternary statement
function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        let value = (i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i;
        returnArray.push(value);
    }

    return returnArray;
}

function displayData(fbArray) {
    // get the table body element from the page
    let tableBody = document.querySelector('#tableResults');

    // get the template row
    let templateRow = document.querySelector('#fbTemplate');

    // clear table
    tableBody.innerHTML = '';

    for (let i = 0; i < fbArray.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //insert values into row (5 columns)
        let rowCols = tableRow.querySelectorAll('td');
        for (let col = 0; col <= 4; col++) {
            rowCols[col].textContent = fbArray[i + col];
            rowCols[col].classList.add(fbArray[i + col]);
        }

        // add row to table
        tableBody.appendChild(tableRow);
    }
}
