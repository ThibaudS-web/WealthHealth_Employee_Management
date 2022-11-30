import useEmployeesProvider from "../context/EmployeesContext"

function Employees(props: { title: string }) {
	document.title = props.title

	const { employees, addEmployee } = useEmployeesProvider()

	console.log("employees", employees)

	return (
		<>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div>List of Employees: {JSON.stringify(employees)}</div>
			</div>
		</>
	)
}

export default Employees
