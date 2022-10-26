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

const courses = require('./data/Detail.json');

app.get('/detail/:id', (req, res) => {
    const id = req.params.id;

    const course_detail = courses.find(course => course.detail_id === id);
    res.send(course_detail);
})
