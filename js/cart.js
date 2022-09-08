const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () => {
    const product = getInputValueById('name-field');
    const quantity = getInputValueById('quantity-field');

    // set in UI 
    addProductToDisplay(product, quantity);

    // console.log(product, quantity);
    // localStorage.setItem(product, quantity);

    saveItemToLocalStorage(product, quantity)
}


getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart;
}

saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;

    const cartStringified = JSON.stringify(cart)

    // save to local storage 
    localStorage.setItem('cart', cartStringified)

}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);

}

const displayShoppingProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product]
        console.log(product)
        addProductToDisplay(product, quantity)
    }
}
displayShoppingProducts()