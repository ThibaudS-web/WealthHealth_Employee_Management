import { createContext, useReducer, useContext } from "react"
import Employee from "../models/Employee"
import { ActionsKind } from "../reducers/Actions"
import employeesReducer, { initialState } from "../reducers/employeesReducer"
import { ContextEmployee } from "./ContextEmployeeInterface"

const EmployeesContext = createContext<null | ContextEmployee>(null)

export const EmployeesProvider = (props: { children: any }) => {
	const [_state, dispatch] = useReducer(employeesReducer, initialState)
	const addEmployee = (employee: Employee) => {
		dispatch({
			type: ActionsKind.ADD_EMPLOYEE,
			payload: employee
		})
	}

	const value: ContextEmployee = {
		employees: initialState.employees,
		addEmployee
	}

	return <EmployeesContext.Provider value={value}>{props.children}</EmployeesContext.Provider>
}

const useEmployeesProvider = () => {
	const context = useContext(EmployeesContext)!!

	if (context === undefined) {
		throw new Error("useEmployees must be used within EmployeesContext")
	}

	return context
}

export default useEmployeesProvider
