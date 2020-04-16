const express = require("express")
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))

let bodyLog = ''

morgan.token('body', (req, res) => JSON.stringify(bodyLog))

let persons =
    [
        {
            name: "Arto Hellas",
            number: "123-224-345",
            id: 1
        },
        {
            name: "Ada Lovelace",
            number: "123-224-2345",
            id: 2
        },
        {
            name: "Dan Abramov",
            number: "2134123456",
            id: 3
        },
        {
            name: "Mary Poppendieck",
            number: "2348732465982376",
            id: 4
        }
    ]

app.get('/', (req, res) => {
    res.send('<h1>API located at /api/persons</h1>')
})

app.get('/info', (req, res) => {
    res.send(`<div>Phonebook has ${persons.length} entries</div>\
    <div>${Date()}</div>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons.filter(p => p.id !== id)

    res.status(204).end()
})

app.post('/api/persons/', morgan(':body'), (req, res) => {
    const body = req.body
    // console.log(req.body)
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    if (persons.find(p => p.name === body.name)) {
        return res.status(400).json({
            error: 'name already in phonebook'
        })
    }
    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 100)
    }
    persons = persons.concat(person)
    // console.log(person)
    bodyLog = person
    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})