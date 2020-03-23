import React from 'react';

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = ({ name, exercises }) => {
	return (
		<p>{name}: {exercises} exercises</p>
	)
}

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part, i) =>
				<Part key={i} name={part.name} exercises={part.exercises}></Part>
			)}
		</div>
	)
}

const Total = (props) => {
	const parts = props.parts
	return (
		<p>Number of exercises: {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
	)
}

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name}></Header>
			<Content parts={course.parts}></Content>
			<Total parts={course.parts}></Total>
		</div>
	)
}

const Courses = ({ courses }) => {
	return (
		<div>
			{courses.map((course, i) =>
				<Course key={i} course={course}></Course>
			)}
		</div>
	)
}

export default Courses;

