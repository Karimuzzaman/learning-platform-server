const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('programming master api running');
})

app.listen(port, () => {
    console.log(`Server is running on port:`, port);
})

const courseCategories = require('./data/courses.json');

app.get('/course-categories', (req, res) => {
    res.send(courseCategories);
})