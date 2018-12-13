document.addEventListener('DOMContentLoaded', function() {
    
    // create an array of todos
    var todosArray = []

    // target the form
    var theForm = document.getElementById('the-form')


    // when the form is submitted, then execute some instructions
    theForm.addEventListener('submit', function(event) {

        // prevent the page from reloading
        event.preventDefault()

        // target the new todo input field
        var newTodoField = document.getElementById('new-todo-field')
        
        // store the value of the input field
        var newTodo = newTodoField.value

        // add the new todo to the todos array
        todosArray.push(newTodo)

        // clear out the existing todos
        document.getElementById('list-of-todos').innerHTML = ""
        
        // loop over the todos array and create an list item for each todo
        // and append each list item to the DOM
        for(var i = 0; i < todosArray.length; i++) {
            createListItem(todosArray[i])
        }
        
    })

    function createListItem(todoText) {
        // create a new list item element
        var newListItem = document.createElement('li')

        // add the todo to the list item text
        newListItem.innerText = todoText

        console.log('the new list item', newListItem)
        var listOfTodos = document.getElementById('list-of-todos')

        listOfTodos.appendChild(newListItem)
    }
})