const countValue = () => {
    const countButton = document.getElementById('count-number');
    const countParse = countButton.innerText;
    let convertToNumber = parseInt(countParse);
    let newNumber = convertToNumber + 1;
    return newNumber;

}


const countButton = () => {
    const countNumber = document.getElementById('count-number');
    const findNewNumber = countValue();
    countNumber.innerText = findNewNumber;
    localStorage.setItem('count', findNewNumber);

}

// const display = () => {
//     const countButton = document.getElementById('count');

//     const getItem = localStorage.getItem('count');
//     if (!getItem) {
//         localStorage.setItem('count-button', 0)
//     }
//     console.log(getItem);
//     countButton.innerText = localStorage.getItem('count');

// }
// display();