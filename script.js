document.addEventListener('DOMContentLoaded', function() {
    
    // create an array of chores
    var chorelistArray = []

    // target chores
    var chores = document.getElementById('tays-chores')


    // when the form is submitted, then execute some instructions
    chores.addEventListener('submit', function(event) {

        // prevent the page from reloading
        event.preventDefault()

        // target the new chores input field
        var newChoreField = document.getElementById('new-chore-field')
        
        // store the value of the input field
        var newChore = newChoreField.value

        // add the new chore to the chores array
        chorelistArray.push(newChore)

        // clear out the existing chores
        document.getElementById('list-of-chores').innerHTML = ""
        
        // loop over the chores array and create an list item for each chore
        // and append each list item to the DOM
        for(var i = 0; i < chorelistArray.length; i++) {
            createListItem(chorelistArray[i])
        }
        
    })

    function createListItem(tayschores) {
        // create a new list item element
        var newListItem = document.createElement('li')

        // add the chores to the list item text
        newListItem.innerText = tayschores

        console.log('the new list item', newListItem)
        var listofchores = document.getElementById('list-of-chores')

        listofchores.appendChild(newListItem)
    }
})