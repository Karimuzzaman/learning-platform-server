const express = require('express');
const app = express();
// now, declaring and getting CORS (Cross-Origin Resource Sharing) 
const cors = require('cors');
const port = process.env.PORT || 5000;

//// now, using CORS (Cross-Origin Resource Sharing)
app.use(cors());

app.get('/', (req, res) => {
    res.send('programming master api running');
})

app.listen(port, () => {
    console.log(`Server is running on port:`, port);
})

// getting course.json api file.
const courseCategories = require('./data/courses.json');


// sending course.json api file.
app.get('/course-categories', (req, res) => {
    res.send(courseCategories);
})


// getting Detail.json api file.
const courses = require('./data/Detail.json');


// sending Detail.json api file.
app.get('/detail/:id', (req, res) => {
    const id = req.params.id;

    const course_detail = courses.find(course => course.detail_id === id);
    res.send(course_detail);
})
