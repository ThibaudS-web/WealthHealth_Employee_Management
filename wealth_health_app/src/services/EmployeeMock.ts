import Employee from "../models/Employee"
import { departments } from "../mocks/department"

class EmployeeMock {
	private async getEmployee(): Promise<Employee[]> {
		let data: Employee[]
		try {
			const result = await fetch(`http://localhost:5173/mock/employees.json`)
			data = await result.json()
			return data
		} catch (err) {
			throw new Error("Error API from getEmployees: ", err as Error)
		}
	}

	private getRandomDepartment() {
		const randomizeIndex = Math.round(Math.random() * (departments.length - 1))
		return departments[randomizeIndex]
	}

	public initializeMockEmployee() {
		const employees = this.getEmployee()
		const listEmployees: Employee[] = []

		employees
			.then((employees) =>
				employees.map(
					(employee) =>
						new Employee(
							employee.id,
							employee.firstName,
							employee.lastName,
							employee.startDate,
							this.getRandomDepartment(),
							employee.birthday,
							employee.street,
							employee.city,
							employee.state,
							employee.zipCode
						)
				)
			)
			.then((employees) => {
				listEmployees.push(...employees)
				console.log(listEmployees)
				localStorage.setItem("employees", JSON.stringify(listEmployees))
			})
	}
}
//TODO: Event on click addEmployees on table (*10)
export default EmployeeMock
