const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/js', (req, res) => {
    res.sendFile(__dirname + '/views/javascript.html');
});

app.get('/node', (req, res) => {
    res.sendFile(__dirname + '/views/node.html');
});

app.get('/express', (req, res) => {
    res.sendFile(__dirname + '/views/express.html');
});


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});