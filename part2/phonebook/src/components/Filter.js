import React from 'react'

const Filter = ({ setFilter }) => {
    const filter = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div>
            search <input
                onChange={filter}
            />
        </div>
    )
}

export default Filter