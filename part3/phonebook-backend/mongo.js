const mongoose = require('mongoose')

if (process.argv.length < 3) {
	console.log('need pw as arg')
	process.exit(1)
}

const pw = process.argv[2]
const url = `mongodb+srv://matthias:${pw}@cluster0-tk0ut.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
	id: Number,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) { // upload a new person
	name = process.argv[3]
	number = process.argv[4]
	const person = new Person({
		name: `${name}`,
		number: `${number}`,
		id: Math.floor(Math.random() * 500),
	})

	person.save().then(rsp => {
		console.log('person saved!', rsp)
		mongoose.connection.close()
	})
} else if (process.argv.length === 3) { // list all persons
	console.log('Phonebook')
	Person.find({}).then(res => {
		res.forEach(p => {
			console.log(p)
		})
		mongoose.connection.close()
	})
}

