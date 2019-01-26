const express = require('express')
const app = express()
 
app.get('/getLocations', (req, res) => {
    query = req.query;
    res.json({ 'query': query })
})

app.post('/saveLocation', (req, res) => {
    body = req.body;
    res.json({ 'message': 'Hello World!' })
})

app.listen(3000, () => console.log('blog server running on port 3000!'))