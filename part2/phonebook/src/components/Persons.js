import React from 'react'

const Person = ({ name, number }) => {
    return (
        <div>{name} : {number}</div>
    )
}

const Persons = ({ persons, filter }) => {
    const toDisplay = persons.filter(p => p.name.toLowerCase().includes(filter))
    return (
        toDisplay.map(p =>
            <Person key={p.name} name={p.name} number={p.number}></Person>
        )
    )
}

export default Persons