const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

app.get('/', (req, res) =>{
    res.send('Learning api running')
});

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/courses-details/:id', (req, res) => {
    const id = req.params.id;
    const courses_id = courses.find(n => n.id === parseInt(id))
    res.send(courses_id)
})

app.listen(port, () =>{
    console.log('server running on port 5000')
})