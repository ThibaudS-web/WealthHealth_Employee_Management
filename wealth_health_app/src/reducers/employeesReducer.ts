import Employee from "../models/Employee"
import { ActionsKind } from "./Actions"

//TODO: Need to be moved in other file
export class EmployeeListState {
	private data = localStorage.getItem("employees")
	employees: Employee[] = this.data ? JSON.parse(this.data) : []

	addEmployees(employee: Employee) {
		this.employees.push(employee)
		localStorage.setItem("employees", JSON.stringify(this.employees))
	}
}

export const initialState = new EmployeeListState()

export type ACTIONTYPES = { type: ActionsKind.ADD_EMPLOYEE; payload: Employee }

const employeesReducer = (state: EmployeeListState, action: ACTIONTYPES) => {
	const { type, payload } = action
	switch (type) {
		case ActionsKind.ADD_EMPLOYEE:
			state.addEmployees(payload)
			return state

		default:
			throw new Error(`No case for type ${type} found in employeeReducer`)
	}
}

export default employeesReducer
