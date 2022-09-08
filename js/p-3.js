document.getElementById('send-name-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = '';
    localStorage.setItem('name', inputFieldValue);
});


document.getElementById('delete-name-button').addEventListener('click', function () {
    localStorage.removeItem('name');
});


document.getElementById('send-email-button').addEventListener('click', function () {
    const inputField = document.getElementById('email-field');
    const inputFieldValue = inputField.value;
    inputField.value = '';
    localStorage.setItem('email', inputFieldValue);
});


document.getElementById('delete-email-button').addEventListener('click', function () {
    localStorage.removeItem('email');
});

document.getElementById('send-message-button').addEventListener('click', function () {
    const inputField = document.getElementById('message-field');
    const inputFieldValue = inputField.value;
    inputField.value = '';
    localStorage.setItem('message', inputFieldValue);
});


document.getElementById('delete-message-button').addEventListener('click', function () {
    localStorage.removeItem('message');
});



document.getElementById('reset-button').addEventListener('click', function () {
    localStorage.clear();
})