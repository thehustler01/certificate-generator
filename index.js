const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());


app.use(express.static('public'));

// Define a route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a sample route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});