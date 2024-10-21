//importeren an express module in node_modules

const express = require('express');
//Aanmaken van een express app
const app = express();

//Endpoints , req = request, res = wat je teruggeeft
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/artists', (req, res) => {
    res.send([
        "JB",
        "Beyonce",
]);
});

//Starten van de server en op welke port de server draait.
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});