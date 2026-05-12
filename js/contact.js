//Contact Form JS
//validates the form inputs
function validateForm() 
{
    //get the values of the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;
    const date = document.getElementById('date').value;

    if (name.length < 3) 
    {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    if (category === "") 
    {
        alert("Please select a category.");
        return false;
    }
    if (message.length > 500) 
    {
        alert("Message cannot exceed 500 characters.");
        return false;
    }
    if (date === "") 
    {
        alert("Please select a date.");
        return false;
    }
    return true;
}

//function to show limit the number of characters in the textarea
function updateCharCount() 
{
    const textarea = document.getElementById('message');
    const counter = document.getElementById('char');
    const currentLength = textarea.value.length;
    const maxLength = 500;

    //display and update character count as user types
    counter.textContent = `${currentLength} / ${maxLength} characters`;

    //if over limit -> change color to red
    //if under limit -> change color to grey
    if (currentLength > maxLength) 
    {
        counter.style.color = 'red';
    } 
    else 
    {
        counter.style.color = '#666';
    }
    
    //hide counter if no text input
    if (currentLength > 0) 
    {
        counter.style.display = 'block';
    } 
    else 
    {
        counter.style.display = 'none';
    }
}
