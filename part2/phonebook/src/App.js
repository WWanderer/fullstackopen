import React, { useState, useEffect } from 'react'
import dbService from './services/persons'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'



const App = () => {
	const [persons, setPersons] = useState([])
	const [filter, setFilter] = useState('')

	useEffect(() => {
		dbService
			.getAll()
			.then(rsp => {
				setPersons(rsp)
			})
	}, [])
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				setFilter={setFilter}
			/>
			<h2> Add person</h2>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
			/>
			<h2>Numbers</h2>
			<Persons
				persons={persons}
				flt={filter}
				setPersons={setPersons}
			/>
		</div>
	)
}

export default App