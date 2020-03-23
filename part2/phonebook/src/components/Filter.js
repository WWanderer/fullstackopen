import React from 'react'

const Filter = ({ persons, setPersonsToShow }) => {
    const filterName = (event) => {
        const filter = persons.filter(p => p.name.toLowerCase().includes(event.target.value))
        setPersonsToShow(filter)
    }
    return (
        <div>
            search <input
                onChange={filterName}
            />
        </div>
    )
}

export default Filter