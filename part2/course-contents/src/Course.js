import React from 'react';

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = ({ name, exercises }) => {
	return (
		<li>{name}: {exercises} exercises</li>
	)
}

const Content = ({ parts }) => {
	return (
		<ul>
			{parts.map((part, i) =>
				<Part key={i} name={part.name} exercises={part.exercises}></Part>
			)}
		</ul>
	)
}

const Total = (props) => {
	const parts = props.parts
	console.log("parts", parts)
	return (
		<p>Number of exercises: {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
	)
}

const Courses = ({ courses }) => {
	return (
		<div>
			{courses.map(course =>
				[
					<Header course={course.name}></Header>,
					<Content parts={course.parts}></Content>,
					<Total parts={course.parts}></Total>
				]
			)}
		</div>
	)
}

export default Courses;

