import React from 'react'
import dbService from '../services/persons'

const Person = ({ person, persons, setPersons }) => {
    const delPerson = () => {
        const result = window.confirm(`Delete person ${person.name}?`)
        if (result) {
            dbService.del(person).then(res => {
                // console.log(res)
                setPersons(persons.filter(p => p.id !== person.id))
            })
        }
    }
    return (
        <div>{person.name} : {person.number} <button onClick={delPerson}>delete</button></div>
    )
}

const Persons = ({ persons, flt, setPersons }) => {
    const toDisplay = persons.filter(p => p.name.toLowerCase().includes(flt))
    console.log(toDisplay)
    return (
        toDisplay.map(p =>
            <Person key={p.id} person={p} persons={persons} setPersons={setPersons}></Person>
        )
    )
}

export default Persons