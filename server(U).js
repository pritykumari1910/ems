const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = 3000;
const CSV_FILE_PATH = 'users.csv';

app.use(bodyParser.json());

// Create a CSV file if it doesn't exist
fs.exists(CSV_FILE_PATH, (exists) => {
    if (!exists) {
        fs.writeFileSync(CSV_FILE_PATH, 'name,email\n'); // Write headers
    }
});

// Route to add a user
app.post('/add-user', (req, res) => {
    const { name, email } = req.body;

    // Append new user to CSV
    fs.appendFile(CSV_FILE_PATH, `${name},${email}\n`, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to add user' });
        }
        res.json({ message: 'User added successfully' });
    });
});

// Route to update a user
app.post('/update-user', (req, res) => {
    const { name, newName, newEmail } = req.body;

    const users = [];
    fs.createReadStream(CSV_FILE_PATH)
        .pipe(csv())
        .on('data', (data) => users.push(data))
        .on('end', () => {
            let userFound = false;

            // Update the user data
            users.forEach((user, index) => {
                if (user.name === name) {
                    userFound = true;
                    if (newName) user.name = newName;
                    if (newEmail) user.email = newEmail;
                }
            });

            if (!userFound) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Write updated users back to CSV
            const updatedUsers = users.map(user => `${user.name},${user.email}`).join('\n');
            fs.writeFile(CSV_FILE_PATH, 'name,email\n' + updatedUsers + '\n', (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Failed to update user' });
                }
                res.json({ message: 'User updated successfully' });
            });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
