const sendButton = (input) => {
    const inputField = document.getElementById(input);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;

}

const sendButtonApply = () => {
    const nameSend = sendButton('name-field');
    localStorage.setItem('name', nameSend);

    const emailSend = sendButton('email-field');
    localStorage.setItem('email', emailSend);

    const messageSend = sendButton('message-field');
    localStorage.setItem('message', messageSend);
}




document.getElementById('delete-name-button').addEventListener('click', function () {
    localStorage.removeItem('name');
});

document.getElementById('delete-email-button').addEventListener('click', function () {
    localStorage.removeItem('email');
});

document.getElementById('delete-message-button').addEventListener('click', function () {
    localStorage.removeItem('message');
});


document.getElementById('send-button').addEventListener('click', function () {
    localStorage.setItem('name', inputFieldValue);
    localStorage.setItem('email', inputFieldValue);
    localStorage.setItem('message', inputFieldValue);
})
document.getElementById('reset-button').addEventListener('click', function () {
    localStorage.clear();
})