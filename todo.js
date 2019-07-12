const express = require('express')
const app = express()

const todoList = [
    {
        id: 1,
        task: 'Going Home',
        done: false,
        important: true
    },
    {
        id: 2,
        task: 'Learn React + Redux',
        done: true,
        important: true
    }, 
    {
        id: 3,
        task: 'Tidur siang',
        done: false,
        important: false
    }
]

module.exports = todoList

