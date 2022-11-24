import Employee from "../models/Employee"
import { ActionsKind } from "./Actions"

export const initialState: any[] = []

// export type ACTIONTYPES =
// 	| { type: ActionsKind.ADD_EMPLOYEE; payload: Employee[] }
// 	| { type: ActionsKind.REMOVE_EMPLOYEE; payload: Employee[] }

const employeesReducer = (state: typeof initialState, action: any) => {
	const { type, payload } = action
	switch (type) {
		case ActionsKind.ADD_EMPLOYEE:
			console.log(ActionsKind.ADD_EMPLOYEE, payload)
			return [...state, payload]
		case ActionsKind.REMOVE_EMPLOYEE:
			console.log(ActionsKind.REMOVE_EMPLOYEE, payload)
			return state.filter((currentEmployee) => currentEmployee.name !== payload.id)
		default:
			throw new Error(`No case for type ${type} found in employeeReducer`)
	}
}

export default employeesReducer
