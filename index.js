require('dotenv').config()
const express = require('express')
const app = express()
const todoList = require('./todo')
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json(todoList)
})

app.post('/', (req, res) => {
    let newTodo = JSON.parse(req.body)
    newTodo.id = todoList.length + 1
    done = false
    important = false
    todoList.push(newTodo)
    res.status(201).json(newTodo)
})

app.put('/:id', (req, res) => {
    let id = req.params.id
    if(todoList[id]){
        let updatedTodo = JSON.parse(req.body)
        todoList[id] = updatedTodo
        res.status(204).send()
    } else {
        res.status(404, 'the task is not found').send()
    }

})

app.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id)
    if (todoList.filter(todo => todo.id == id).length !==0) {
        todoList = todoList.filter(todo => todo.id !== id)
        res.status(200).send()
    } else {
        res.status(404).send()
    }
})

app.listen(process.env.PORT || 3002, () => 
    console.log('Express server is running on PORT' + process.env.PORT))
