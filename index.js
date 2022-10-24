const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('programming master api running');
})

app.listen(port, () => {
    console.log(`Server is running on port:`, port);
})