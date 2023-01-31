import Employee from "../models/Employee"

function filterEmployees(value: string, employees: Employee[]) {
	if (value.length === 0) return employees

	const filter = employees.filter(
		(employee) =>
			employee.firstName.toLowerCase().includes(value.toLowerCase().trim()) ||
			employee.lastName.toLowerCase().includes(value.toLowerCase().trim()) ||
			employee.state.toLowerCase().includes(value.toLowerCase().trim()) ||
			employee.birthday.toString().includes(value.trim()) ||
			employee.startDate.toString().includes(value.trim()) ||
			employee.zipCode.includes(value.trim()) ||
			employee.city.toLowerCase().includes(value.toLowerCase().trim()) ||
			employee.street.toLowerCase().includes(value.toLowerCase().trim()) ||
			employee.department.toLowerCase().includes(value.toLowerCase().trim())
	)

	const employeesFiltered = new Set([...filter])

	return [...employeesFiltered.values()]
}

export default filterEmployees
