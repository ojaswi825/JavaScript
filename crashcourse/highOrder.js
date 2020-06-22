const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: false
    },
    {
        id: 2,
        text: 'Dinner with wife',
        isComplete: false
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isComplete: true
    }
];

// higher order functions:
// done on arrays and accepts array objects as an argument

//foreach
todos.forEach(function(todo) {
    console.log(todo.text);
})

//map   returns an array
const todoTexts = todos.map(function(todo){
    return todo.text;
});

console.log(todoTexts);

// filter returns an array based on a filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isComplete === true;
});

console.log(todoCompleted);

// filter and map
const todoCompletedText = todos.filter(function(todo) {
    return todo.isComplete === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompletedText);
