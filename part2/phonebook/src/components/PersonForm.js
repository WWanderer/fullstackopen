import React, { useState } from 'react'
import dbService from '../services/persons'

const PersonForm = ({ persons, setPersons, setNotification }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber
        }

        if (persons.some((p => p.name === newPerson.name))) {
            const result = window.confirm(`${newName} is already in the phonebook, would you like to replace this person's number?`)
            if (result) {
                const pers = persons.find(p => p.name === newPerson.name)
                pers.number = newPerson.number
                dbService.update(pers)
                    .then(rsp => {
                        // console.log(rsp)
                        setPersons(persons.map(p => p.id === pers.id ? pers : p))
                    })
                    .catch(err => {
                        setNotification(`${pers.name} was already removed from the database`)
                        setTimeout(() => {
                            setNotification(null)
                        }, 2000);
                    })
            }
        } else {
            dbService
                .create(newPerson)
                .then(rsp => {
                    // console.log(rsp)
                    setPersons(persons.concat(rsp))
                })
                .finally(x => {
                    setNotification(`${newPerson.name} was added to the database`)
                    setTimeout(() => {
                        setNotification(null)
                    }, 2000);
                })
        }
        setNewName('')
        setNewNumber('')
    }
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input
                    onChange={handleNewName}
                    value={newName}
                />
            </div>
            <div>
                number: <input
                    type="tel"
                    onChange={handleNewNumber}
                    value={newNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm