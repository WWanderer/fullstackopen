import React from 'react'

const SimpleCountry = ({ country, setFilter }) => {
    const handle = () => {
        setFilter(country.name.toLowerCase())
    }
    return (
        <div>{country.name} <button onClick={handle}>show</button></div>
    )
}

const FullCountry = ({ country }) => {
    const lang = () => {
        let id = 0
        return (
            <div>
                <h3>Languages</h3>
                <div>
                    {country.languages.map(l =>
                        <li key={id++}>{l.name}</li>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2>{country.name}</h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <div>{lang()}</div>
            <img src={country.flag} alt="flag" />
        </div>
    )
}

const Countries = ({ countries, filter, setFilter }) => {
    const toDisplay = countries.filter(
        c => c.name
            .toLowerCase()
            .includes(filter)
    )
    console.log(toDisplay)
    // TODO add a condition for filter
    if (toDisplay.length === 1) {
        return (
            <FullCountry country={toDisplay[0]} />
        )
    }
    else if (toDisplay.length <= 10) {
        return (
            toDisplay.map(c =>
                <SimpleCountry key={c.name} country={c} setFilter={setFilter} />
            )
        )
    } else {
        return (
            <p>Too many matches</p>
        )
    }
}

export default Countries