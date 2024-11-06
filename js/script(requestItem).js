document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const quantity = document.getElementById('quantity').value;
    const requestorName = document.getElementById('requestorName').value;
    const email = document.getElementById('email').value;

    // Here you can send the request to your server or handle it as needed
    console.log('Request Submitted:', {
        itemName,
        itemDescription,
        quantity,
        requestorName,
        email,
    });

    // Optionally, clear the form after submission
    document.getElementById('requestForm').reset();
});
