document.getElementById('add-button').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    // console.log(nameValue);
    nameField.value = '';
    localStorage.setItem('name', nameValue)

});
document.getElementById('add-age-button').addEventListener('click', function () {
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    // console.log(nameValue);
    ageField.value = '';
    localStorage.setItem('age', ageValue)

});

document.getElementById('remove-button').addEventListener('click', function () {
    localStorage.removeItem('name')
});

document.getElementById('remove-age-button').addEventListener('click', function () {
    localStorage.removeItem('age')
});

document.getElementById('clear-all').addEventListener('click', function () {
    localStorage.clear();
});

