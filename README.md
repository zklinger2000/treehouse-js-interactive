# treehouse-js-interactive
# Problem: user interaction isn't working
# Solution: Add interactivity so the user can manage daily tasks

# Add a new task
  # When the button is pressed
  # Create a new list item with the text form #new-task:
    # input (checkbox)
    # label
    # input (text)
    # button.edit
    # button.delete
    # Each element needs to be modified and appended

# Edit an existing task
  # When the Edit button is pressed
    # if the class of the parent is .editMode
      # Switch from .editMode
      # label text becomes the input's value
    # else
      # Switch to .editMode
      # input value becomes the label's text
  
    # Toggle .editMode on the parent


# Delete an existing task
  # When the Delete button is pressed
    # Remove the parent list item from the ul

# Mark a task as complete
  # When the Checkbox is checked
    # Append the task li to the #completed-tasks

# Mark a task as incomplete
  # When the Checkbox is unchecked
    # Append the task li to the #incomplete-tasks