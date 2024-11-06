// // Add Membership
// document.getElementById('membership-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     var name = document.getElementById('membership-name').value;
//     var details = document.getElementById('membership-details').value;

//     // Add membership to Firebase
//     db.collection('memberships').add({
//         name: name,
//         details: details
//     }).then(function() {
//         alert('Membership added successfully!');
//     }).catch(function(error) {
//         console.error('Error adding membership: ', error);
//     });
// });

// // Update Membership (You would need to know the document ID to update)
// document.getElementById('update-membership-btn').addEventListener('click', function() {
//     var name = document.getElementById('membership-name').value;
//     var details = document.getElementById('membership-details').value;

//     // Assuming you know the membership document ID (you can fetch this from Firestore)
//     var membershipId = "membership_document_id"; 

//     db.collection('memberships').doc(membershipId).update({
//         name: name,
//         details: details
//     }).then(function() {
//         alert('Membership updated successfully!');
//     }).catch(function(error) {
//         console.error('Error updating membership: ', error);
//     });
// });


// // Add Membership function
// function addMembership() {
//     const name = document.getElementById('membership-name').value;
//     const details = document.getElementById('membership-details').value;
//     console.log(name)
//     console.log(details)

//     if (!name || !details) {
//         alert('Please enter both Membership Name and Details');
//         return;
//     }

//     fetch('http://localhost:3000/add-membership', {  // Correct URL pointing to the backend
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, details }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message || 'Membership added successfully');
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Failed to add membership');
//     });
// }

// // Update Membership function
// function updateMembership() {
//     const name = document.getElementById('membership-name').value;

//     if (!name) {
//         alert('Please enter the Membership Name to update');
//         return;
//     }

//     const newName = prompt('Enter new Membership Name (leave blank to keep current name):') || name;
//     const newDetails = prompt('Enter new Membership Details (leave blank to keep current details):');

//     fetch('http://localhost:3000/update-membership', {  // Correct URL pointing to the backend
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, newName, newDetails }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message || 'Membership updated successfully');
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Failed to update membership');
//     });
// }



// // Import Firebase SDK if not already included
// // Add Firebase CDN script in HTML or import in your project setup







// membership.js

function addMembership() {
    const name = document.getElementById('membership-name').value;
    const details = document.getElementById('membership-details').value;

    if (!name || !details) {
        alert('Please enter both Membership Name and Details');
        return;
    }

    fetch('http://localhost:3000/add-membership', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, details }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || 'Membership added successfully');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to add membership');
    });
}

function updateMembership() {
    const name = document.getElementById('membership-name').value;

    if (!name) {
        alert('Please enter the Membership Name to update');
        return;
    }

    const newName = prompt('Enter new Membership Name (leave blank to keep current name):') || name;
    const newDetails = prompt('Enter new Membership Details (leave blank to keep current details):');

    fetch('http://localhost:3000/update-membership', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, newName, newDetails }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || 'Membership updated successfully');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to update membership');
    });
}
