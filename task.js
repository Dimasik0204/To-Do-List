const addSubmit = document.getElementById("addSubmit")

// access textbox using id 
const nameTextBox = document.getElementById("nameTextBox")

console.log(addSubmit)
// attach button event on the button 
addSubmit.addEventListener("mouseover", buttonMouseOver)

addSubmit.addEventListener("click", function(){

// add class to the button
addSubmit.setAttribute ('class', "addbutton")
    const tasks = nameTextBox.value
//creating lists' elements
    let li = document.createElement("li")
//li.innerHTML = tasks
    li.setAttribute ("class", "todo-item")
    
//creating a checkbox for each li
   let checkbox = document.createElement ('input')
   checkbox.type = "checkbox"
   checkbox.setAttribute('class', 'checkbox')
   checkbox.addEventListener ("click", function(){
    console.log ("it works")
   })
   li.appendChild(checkbox)



//creating label for each li
   let liLabel = document.createElement ('label')
   liLabel.innerHTML = tasks
   li.appendChild(liLabel)


//create a remove button
    let removeButton = document.createElement('button')
    removeButton.className = "buttonRemoved"
    removeButton.setAttribute('class', 'removeButton')
    removeButton.addEventListener("click", function(){
        removeButton.parentElement.remove()
    })
    
    removeButton.innerHTML = "Remove"
    li.appendChild(removeButton)

// to check/uncheck the checkbox
    checkbox.addEventListener ("click", function(){
        if(this.checked){
    completedTasksUL.appendChild(li)
        }
        else {
            pendingTasksUL.appendChild(li)
        }
        
    })
    //append the li to the pending list
    pendingTasksUL.appendChild(li)

    

})



console.log(document) 

function buttonMouseOver() {
    console.log("Button mouseoever")
}


function buttonClicked() {

    // get the value of the textbox 
    console.log(nameTextBox.value) 

    console.log("Button clicked")

    
}
