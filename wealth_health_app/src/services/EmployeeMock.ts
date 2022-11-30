import Employee from "../models/Employee"

class EmployeeMock {
	private async getEmployee(): Promise<Employee[]> {
		let data: Employee[]
		try {
			const result = await fetch(`http://localhost:5173/public/mock/employees.json`)
			data = await result.json()
			return data
		} catch (err) {
			throw new Error("Error API from getEmployees: ", err as Error)
		}
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
							employee.department,
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
				localStorage.setItem("employees", JSON.stringify(listEmployees))
			})
	}
}

export default EmployeeMock
