function addUser() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;

    if (!name || !email) {
        alert('Please fill in both fields.');
        return;
    }

    // Get existing users from local storage or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Create a new user object
    const newUser = {
        name: name,
        email: email
    };

    // Add new user to the array and save it to local storage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Clear input fields
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';

    alert('User added successfully!');
}

function updateUser() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;

    if (!name || !email) {
        alert('Please fill in both fields.');
        return;
    }

    // Get existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user to update
    const userIndex = users.findIndex(user => user.email === email);
    
    if (userIndex !== -1) {
        // Update the user details
        users[userIndex].name = name;
        localStorage.setItem('users', JSON.stringify(users));
        alert('User updated successfully!');
    } else {
        alert('User not found. Please check the email.');
    }

    // Clear input fields
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';
}
