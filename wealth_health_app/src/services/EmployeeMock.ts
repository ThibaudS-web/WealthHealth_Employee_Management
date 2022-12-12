import Employee from "../models/Employee"
import { departments } from "../mocks/department"

class EmployeeMock {
	count = 0
	private async getEmployees(): Promise<Employee[]> {
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

	public async addMockEmployees() {
		const employees = await this.getEmployees()
		console.log(employees.slice(this.count, this.count + 10))
		const employeesMapped = employees
			.slice(this.count, this.count + 10)
			.map(
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
		this.count += 10
		return employeesMapped
	}
}

export default EmployeeMock
