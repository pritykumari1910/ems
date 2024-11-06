window.onload = function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userTableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];

    users.forEach(user => {
        const row = userTableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellEmail = row.insertCell(1);

        cellName.textContent = user.name;
        cellEmail.textContent = user.email;
    });
};
