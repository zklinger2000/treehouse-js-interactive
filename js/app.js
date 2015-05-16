//Problem: user interaction isn't working
//Solution: Add interactivity so the user can manage daily tasks

//VARIABLES
//these are the items on the page we want to interact with
//or need to hold values from the fields, checkboxes, etc.
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
//This will create a new <li> element with all the elements we need for a task
var createNewTaskElement = function(taskString) {
  //VARIABLES
  var listItem = document.createElement("li");        //Create List Item (an actual <li> element on the page)
  var checkBox = document.createElement("input");     //input (checkbox)
  var label = document.createElement("label");        //label
  var editInput = document.createElement("input");    //input (text)
  var editButton = document.createElement("button");  //button.edit
  var deleteButton = document.createElement("button");//button.delete
  
  //Each element needs to be modified
  
  //Each element needs to be appended
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

//Add a new task
//when you click on the button, it adds a task element
var addTask = function() {
  console.log("Add task...");
  //When the button is pressed
  //Create a new list item with the text form #new-task:
  var listItem = createNewTaskElement("some new task");
  
  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
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
var tasksCompleted = function() {
  console.log("Task completed...");
  //When the Checkbox is checked
    //Append the task li to the #completed-tasks
}

//Mark a task as incomplete
var tasksIncomplete = function() {
  console.log("Task incomplete...");
  //When the Checkbox is unchecked
    //Append the task li to the #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("bindTaskEvents...");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

//Set the click-handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items (the li's)
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (tasksIncomplete)
  bindTaskEvents(incompleteTasksHolder.children[i], tasksIncomplete);
}

//cycle over completedTasksHolder ul list items (the li's)
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (tasksCompleted)
  bindTaskEvents(completedTasksHolder.children[i], tasksCompleted);
}

