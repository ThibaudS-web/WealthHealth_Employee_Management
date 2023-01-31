import Employee from "../models/Employee"
import { departments } from "../mocks/department"

class EmployeeMock {
	private async getEmployees(): Promise<Employee[]> {
		let data: Employee[]
		try {
			const result = await fetch(`http://localhost:3000/mock/employees.json`)
			data = await result.json()
			return data
		} catch (err) {
			throw new Error("Error API from getEmployees of EmployeeMock: ", err as Error)
		}
	}

	private getRandomDepartment() {
		const randomizeIndex = Math.round(Math.random() * (departments.length - 1))
		return departments[randomizeIndex]
	}

	private dateFormat(date: any): any {
		const dateSplit = date.split("/")
		const day = dateSplit[1]
		const month = dateSplit[0]
		const year = dateSplit[2]

		return [year, month, day].join("-")
	}

	public async addMockEmployees() {
		const employees = await this.getEmployees()
		return employees.map(
			(employee) =>
				new Employee(
					employee.id,
					employee.firstName,
					employee.lastName,
					this.dateFormat(employee.startDate),
					this.getRandomDepartment(),
					this.dateFormat(employee.birthday),
					employee.street,
					employee.city,
					employee.state,
					employee.zipCode
				)
		)
	}
}

export default EmployeeMock
