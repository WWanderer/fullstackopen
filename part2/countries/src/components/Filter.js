import React from 'react'

const Filter = ({ setFilter }) => {
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            find countries <input
                onChange={handleFilter}
                onClick={handleFilter}
            />
        </div>
    )
}

export default Filter