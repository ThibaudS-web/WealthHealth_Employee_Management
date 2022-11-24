import useEmployees from "../context/EmployeesContext"

function Employees(props: { title: string }) {
	document.title = props.title
	const { employees, removeEmployee } = useEmployees()

	return <div>List of Employees: {JSON.stringify(employees)}</div>
}

export default Employees
