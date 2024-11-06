const express = require('express');
const xlsx = require('xlsx');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors
const fs = require('fs');

const app = express();
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

const filePath = 'memberships.xlsx';

// Function to read Excel file
function readExcelFile() {
    if (!fs.existsSync(filePath)) {
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.aoa_to_sheet([["Membership Name", "Membership Details"]]);
        xlsx.utils.book_append_sheet(workbook, worksheet, "Memberships");
        xlsx.writeFile(workbook, filePath);
    }
    return xlsx.readFile(filePath);
}

// Add membership route
app.post('/add-membership', (req, res) => {
    const { name, details } = req.body;

    if (!name || !details) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    const workbook = readExcelFile();
    const worksheet = workbook.Sheets["Memberships"];
    const newRow = [name, details];

    const existingData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    existingData.push(newRow);

    const newWorksheet = xlsx.utils.aoa_to_sheet(existingData);
    workbook.Sheets["Memberships"] = newWorksheet;

    xlsx.writeFile(workbook, filePath);

    res.json({ message: 'Membership added successfully' });
});

// Update membership route
app.post('/update-membership', (req, res) => {
    const { name, newName, newDetails } = req.body;

    const workbook = readExcelFile();
    const worksheet = workbook.Sheets["Memberships"];
    const existingData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    let membershipFound = false;
    const updatedData = existingData.map(row => {
        if (row[0] === name) {
            membershipFound = true;
            return [newName || row[0], newDetails || row[1]];
        }
        return row;
    });

    if (!membershipFound) {
        return res.status(404).json({ message: 'Membership not found' });
    }

    const newWorksheet = xlsx.utils.aoa_to_sheet(updatedData);
    workbook.Sheets["Memberships"] = newWorksheet;
    xlsx.writeFile(workbook, filePath);

    res.json({ message: 'Membership updated successfully' });
});







app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
