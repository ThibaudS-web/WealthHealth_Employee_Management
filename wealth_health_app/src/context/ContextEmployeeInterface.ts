import Employee from "../models/Employee"

export interface ContextEmployee {
	employees: Employee[]
	addEmployee: (employee: Employee) => void
}
