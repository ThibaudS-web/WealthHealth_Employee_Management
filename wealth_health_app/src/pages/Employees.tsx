import useEmployeesProvider from "../context/EmployeesContext"
import Table from "../components/table/Table"
import styled from "styled-components"
import { SetStateAction, useState } from "react"
import Employee from "../models/Employee"

const BackgroundEmployeesPage = styled.div`
	background-color: #d4dea3;
	height: 100%;
	width: 100%;
`
const Input = styled.input`
	height: 30px;
	border-radius: 15px;
	border: none;
	padding: 10px;
	font-size: 16px;
	font-weight: 600;
	color: #6e8614;
	width: 250px;
	::placeholder {
		opacity: 0.4;
	}
	@media screen and (max-width: 760px) {
		font-size: 14px;
	}
`
const TableContainer = styled.div`
	background-color: #ffffff;
	border-radius: 2rem;
	width: fit-content;
	padding: 3rem;
`
const Label = styled.label`
	font-size: 20px;
	margin-right: 10px;
	color: white;
	font-weight: 500;
	@media screen and (max-width: 760px) {
		font-size: 16px;
	}
`

function Employees(props: { title: string }) {
	document.title = props.title

	const { employees } = useEmployeesProvider()

	const [employeesFilter, setEmployeesFilter] = useState<Employee[]>(employees)

	const handleSetValue = (e: { target: { value: string } }) => {
		setEmployeesFilter(filterEmployees(e.target.value))
	}

	const filterEmployees = (value: string) => {
		if (value.length === 0) return employees

		const filter = employees.filter(
			(employee) =>
				employee.firstName.toLowerCase().includes(value.toLowerCase().trim()) ||
				employee.lastName.toLowerCase().includes(value.toLowerCase().trim()) ||
				employee.state.toLowerCase().includes(value.toLowerCase().trim()) ||
				employee.birthday.toString().includes(value.trim()) ||
				employee.startDate.toString().includes(value.trim()) ||
				employee.zipCode.includes(value.trim()) ||
				employee.city.toLowerCase().includes(value.toLowerCase().trim()) ||
				employee.street.toLowerCase().includes(value.toLowerCase().trim()) ||
				employee.department.toLowerCase().includes(value.toLowerCase().trim())
		)

		const employeesFiltered = new Set([...filter])

		return [...employeesFiltered.values()]
	}

	return (
		<>
			<BackgroundEmployeesPage>
				<Label htmlFor="filterInput">Find an employee</Label>
				<Input id="filterInput" onChange={handleSetValue} placeholder="Search..." />
				<TableContainer>
					{employees.length !== 0 ? (
						<Table employees={employeesFilter} />
					) : (
						<p>No employee is registered in database</p>
					)}
				</TableContainer>
			</BackgroundEmployeesPage>
		</>
	)
}

export default Employees
