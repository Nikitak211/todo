const express = require('express')
const path = require('path')
const cors = require('cors');
const body_parser = require('body-parser')

const app = express();

const todos = []

app.use(cors())
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }));

app.get('/todo',(req, res) => {
    res.send(todos)
})
app.post('/todo', (req, res) => {
    for(let i = 0; i < todos.length; i++){
        if(todos[i].time === req.body.time){
            todos.splice(i, 1)
            res.send({success: true})
        }
    }
    
})

app.post('/todos', async (req, res) => {
    try {
        todos.push(req.body)
        res.send({success:true,todos:todos})
        } catch (err) {

        }
})

const port = process.env.PORT || 7000

app.listen(port, () => {
    console.log('listening on port ' + port)
})
