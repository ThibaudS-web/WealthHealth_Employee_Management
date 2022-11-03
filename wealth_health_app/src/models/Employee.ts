class Employee {
	firstName: string
	lastName: string
	startDate: Date
	department: string
	birthdate: Date
	street: string
	city: string
	state: string
	zipCode: string
	constructor(
		firstName: string,
		lastName: string,
		startDate: Date,
		department: string,
		birthdate: Date,
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		this.firstName = firstName
		this.lastName = lastName
		this.startDate = startDate
		this.department = department
		this.birthdate = birthdate
		this.street = street
		this.city = city
		this.state = state
		this.zipCode = zipCode
	}
}

export default Employee
