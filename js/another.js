const getInputValueById = name => {
    const inputField = document.getElementById(name);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addName = () => {
    const first = getInputValueById('first-name-field');
    const last = getInputValueById('last-name-field');
    // console.log(first, last);
    addNameToDisplay(first, last)
    // localStorage.setItem(first, last)

    saveItemToLocalStorage(first, last)
}

getNameCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart;
}



saveItemToLocalStorage = (first, last) => {
    const cart = getNameCartFromLocalStorage();
    cart['firstName'] = first;
    cart['lastName'] = last;

    const cartStringified = JSON.stringify(cart)


    localStorage.setItem('cart', cartStringified)

}
const addNameToDisplay = (first, last) => {
    const nameContainer = document.getElementById('name-container');
    const p = document.createElement('p');
    p.innerText = `firstName ${first} lastName ${last}`;
    nameContainer.appendChild(p);
    localStorage.clear();
}


const displayName = () => {
    const cart = getNameCartFromLocalStorage();
    for (const first in cart) {
        const last = cart[first]
        console.log(first)
        addNameToDisplay(first, last)
    }
}
displayName()

document.getElementById('clear-all').addEventListener('click', function () {
    localStorage.clear();
});


