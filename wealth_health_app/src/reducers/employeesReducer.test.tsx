import Employee from "../models/Employee"
import employeesReducer, { initialState } from "./employeesReducer"
import { ActionsKind } from "./Actions"

test("Should add an employee on employees state array", () => {
	const stateEmployee = employeesReducer(initialState, {
		type: ActionsKind.ADD_EMPLOYEE,
		payload: new Employee(
			"124d-5d57-2z1d",
			"Thibaud",
			"Saumureau",
			new Date("2022-05-02"),
			"Sales",
			new Date("1993-05-02"),
			"50 rue Louis Pastier",
			"PARIS",
			"Arizona",
			"16100"
		)
	})

	expect(stateEmployee.employees[0].firstName).toBe("Thibaud")
	expect(stateEmployee.employees).toHaveLength(1)
}) 
