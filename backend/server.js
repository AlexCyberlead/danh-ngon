const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.get('/quotes', (req, res) => {
    fs.readFile('quotes.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading quotes');
        } else {
            res.status(200).json(JSON.parse(data));
        }
    });
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
