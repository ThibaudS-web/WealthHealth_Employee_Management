import { createContext, useReducer, useContext } from "react"
import Employee from "../models/Employee"
import { ActionsKind } from "../reducers/Actions"
import employeesReducer, { initialState } from "../reducers/employeesReducer"

const EmployeesContext = createContext<null | ContextEmployee>(null)

interface ContextEmployee {
	employees: Employee[]
	addEmployee: (employee: Employee) => void
	removeEmployee: (employee: Employee) => void
}

export const EmployeesProvider = (props: { children: any }) => {
	const [state, dispatch] = useReducer(employeesReducer, initialState)
	const addEmployee = (employee: Employee) => {
		dispatch({
			type: ActionsKind.ADD_EMPLOYEE,
			payload: employee
		})
	}

	const removeEmployee = (employee: Employee) => {
		dispatch({
			type: ActionsKind.REMOVE_EMPLOYEE,
			payload: employee
		})
	}

	console.log("state", state)

	const value: ContextEmployee = {
		employees: initialState.employees,
		addEmployee,
		removeEmployee
	}

	return <EmployeesContext.Provider value={value}>{props.children}</EmployeesContext.Provider>
}

const useEmployeesProvider = () => {
	const context: ContextEmployee = useContext(EmployeesContext)!!

	if (context === undefined) {
		throw new Error("useEmployees must be used within EmployeesContext")
	}

	return context
}

export default useEmployeesProvider
