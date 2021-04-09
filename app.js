const express = require('express');
const app = express();
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/js', (req, res) => {
    res.sendFile(__dirname + '/public/javascript.html');
});

app.get('/node', (req, res) => {
    res.sendFile(__dirname + '/public/node.html');
});

app.get('/express', (req, res) => {
    res.sendFile(__dirname + '/public/express.html');
});


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});