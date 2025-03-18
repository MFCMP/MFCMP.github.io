const express = require('express');
const connection = require('./database');

const app = express();
const port = 3000;

app.get('/api/firearms', (req, res) => {
    connection.query('SELECT * FROM firearms_inventory', (err, results) => {
        if (err) {
            res.status(500).send('Error executing query');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
function updateDisplay(verse) {

}
