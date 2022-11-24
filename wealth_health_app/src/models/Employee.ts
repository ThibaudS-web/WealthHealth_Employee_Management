class Employee {
	id: string
	firstName: string
	lastName: string
	startDate: string
	department: string
	birthday: string
	street: string
	city: string
	state: string
	zipCode: string
	constructor(
		id: string,
		firstName: string,
		lastName: string,
		startDate: string,
		department: string,
		birthday: string,
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		this.id = id
		this.firstName = firstName
		this.lastName = lastName
		this.startDate = startDate
		this.department = department
		this.birthday = birthday
		this.street = street
		this.city = city
		this.state = state
		this.zipCode = zipCode
	}
}

export default Employee
