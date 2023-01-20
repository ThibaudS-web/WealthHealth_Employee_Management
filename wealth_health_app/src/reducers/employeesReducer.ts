import Employee from "../models/Employee"
import { ActionsKind } from "./Actions"
import { EmployeeListState } from "./EmployeeListStateInterface"

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
