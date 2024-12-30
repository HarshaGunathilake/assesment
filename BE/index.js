const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

let stories = [];

app.post('/api/stories', (req, res) => {
    const { author, content } = req.body;

    const newStory = {
        id: stories.length + 1,
        author,
        content
    };
    stories.push(newStory);
    res.status(200).json(newStory);
});

app.get('/api/getstories', (req, res) => {
    res.json(stories);
})

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});