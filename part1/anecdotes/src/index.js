import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
	return (
		<button onClick={props.handleClick}>
			{props.text}
		</button>
	)
}

const Top = ({ anecdotes, votes }) => {
	let maxVotes = 0
	let anecdote = ''
	for (let i = 0; i < anecdotes.length; i++) {
		if (votes[i] >= maxVotes) {
			anecdote = anecdotes[i]
			maxVotes = votes[i]
		}
	}
	return (
		<p>{anecdote} with {maxVotes} votes</p>
	)
}

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))

	const next = () => Math.floor(Math.random() * props.anecdotes.length)

	const updatePoints = (pos) => {
		const cpy = [...points]
		cpy[pos] += 1
		setPoints(cpy)
	}

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<p>{props.anecdotes[selected]}</p>
			<p>has {points[selected]} votes</p>
			<Button handleClick={() => updatePoints(selected)} text="vote"></Button>
			<Button handleClick={() => setSelected(next)} text="next"></Button>

			<h1>Anecdote with the most votes</h1>
			<Top anecdotes={anecdotes} votes={points}></Top>

		</div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)