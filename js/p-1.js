document.getElementById('add-button').addEventListener('click', function () {
    const person = {
        firstName: 'sadia',
        lastName: 'islam'
    }
    const name = JSON.stringify(person);
    localStorage.setItem('fullName', name)

});



document.getElementById('delete-button').addEventListener('click', function () {

    localStorage.clear();
});