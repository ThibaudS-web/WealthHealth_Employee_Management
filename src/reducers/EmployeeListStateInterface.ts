import Employee from "../models/Employee"

export class EmployeeListState {
	private data = localStorage.getItem("employees")
	employees: Employee[] = this.data ? JSON.parse(this.data) : []

	addEmployees(employee: Employee) {
		this.employees.push(employee)
		localStorage.setItem("employees", JSON.stringify(this.employees))
	}
}
