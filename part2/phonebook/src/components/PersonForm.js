import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
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
            alert(`${newName} is already in the phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
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