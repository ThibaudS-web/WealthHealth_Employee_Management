import useEmployees from "../../context/EmployeesContext"
import CustomTable from "../../components/table/Table"
import { useState } from "react"
import Employee from "../../models/Employee"
import filterEmployees from "../../utils/filter"
import EmployeeMock from "../../services/EmployeeMock"
import { BackgroundEmployeesPage, Label, Input, DevBtn, TableContainer } from "./styles"

function Employees(props: { title: string }) {
	document.title = props.title

	const isDevEnv = process.env.NODE_ENV === "development"

	const mock = new EmployeeMock()

	const { employees, addEmployee } = useEmployees()

	const [employeesData, setEmployeesData] = useState<Employee[]>(employees)

	const handleSetValue = (e: { target: { value: string } }) => {
		setEmployeesData(filterEmployees(e.target.value, employees))
	}

	const handleAddMockData = async () => {
		if (employees.length >= 100) return
		const employeesMock = await mock.addMockEmployees()
		employeesMock.forEach((employee) => addEmployee(employee))
		setEmployeesData(employeesMock)
	}

	return (
		<>
			<BackgroundEmployeesPage>
				<div>
					<Label htmlFor="filterInput">Find an employee</Label>
					<Input id="filterInput" onChange={handleSetValue} placeholder="Search..." />
					{/* this button are present only for dev/test app  */}
					{isDevEnv ? (
						<DevBtn disabled={employees.length >= 100} onClick={handleAddMockData}>
							{employees.length >= 100
								? "Maximum employees reached"
								: "Add Employees - dev feature"}
						</DevBtn>
					) : null}
				</div>
				<TableContainer>
					{employees.length > 0 ? (
						<CustomTable employees={employeesData} />
					) : (
						<p>No employee is registered in database</p>
					)}
				</TableContainer>
			</BackgroundEmployeesPage>
		</>
	)
}

export default Employees
