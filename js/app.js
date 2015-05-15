//Problem: user interaction isn't working
//Solution: Add interactivity so the user can manage daily tasks

//VARIABLES
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a new task
var addTask = function() {
  console.log("Add task...");
  //When the button is pressed
  //Create a new list item with the text form #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each element needs to be modified and appended
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text becomes the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text
  
    //Toggle .editMode on the parent
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  //When the Delete button is pressed
    //Remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task completed...");
  //When the Checkbox is checked
    //Append the task li to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //When the Checkbox is unchecked
    //Append the task li to the #incomplete-tasks
}


//Set the click-handler to the addTask function
addButton.onclick = addTask;