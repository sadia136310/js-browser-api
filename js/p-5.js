const getElement = (id) => {
    const input = document.getElementById(id);

    return input;
}


const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"))

    const inputText = getElement('todo-text').value;

    if (!todos) {

        const todoList = [
            {
                title: inputText,
                completed: false,
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    else {
        const todoList = [
            ...todos, {
                title: inputText,
                completed: false,
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }

    render();
};

const render = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));

    const ul = getElement("todo-list");

    ul.innerText = '';
    todos.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add("py-2");
        li.innerText = item.title;
        ul.appendChild(li);

    });
};
render();


const handleClearAll = () => {
    localStorage.removeItem("TODOS");
    render();
}















































// const person = [{ name: 'sadia', age: 23 },
// { name: 'saim', age: 21 }]
// const stringified = JSON.stringify(person);
// localStorage.setItem('person', stringified);
// const personInfo = localStorage.getItem('person');
// console.log(personInfo);



// localStorage.setItem('Person', JSON.stringify([{ name: 'sadia', age: 23 },
// { name: 'saim', age: 21 }])
// );
// const person = JSON.parse(localStorage.getItem('Person'));
// console.log(person);