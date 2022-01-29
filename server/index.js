const express = require('express')
const path = require('path')
const cors = require('cors');
const body_parser = require('body-parser')
const shortid = require('shortid');
const app = express();

const todos = []

app.use(cors())
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }));

app.get('/todo', (req, res) => {
    res.send(todos)
    console.log(todos)
})
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos.splice(i, 1)
        }
    }
    res.send('passed')

})

app.post('/todos', async (req, res) => {
    try {
        const { title, body } = req.body
        let newTodo = { id: shortid.generate(), title: title, body: body }
        todos.push(newTodo)

        res.send({ success: true, todos: todos })

    } catch (err) {

    }
})

const port = process.env.PORT || 7000

app.listen(port, () => {
    console.log('listening on port ' + port)
})
