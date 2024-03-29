import { Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"

import Layout from "./components/Layout/layout/Layout"

import Error from "./pages/Error"
import CreateEmployee from "./pages/create-employee/CreateEmployee"
import Employees from "./pages/employees/Employees"

import { EmployeesProvider } from "./context/EmployeesContext"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: cursive, system-ui, 'Open Sans', sans-serif;
    }
`

function App() {
	return (
		<>
			<EmployeesProvider>
				<GlobalStyles />
				<Layout>
					<Routes>
						<Route
							path="/"
							element={<CreateEmployee title="RHnet - Create employee" />}
						/>
						<Route
							path="/employees-list"
							element={<Employees title="RHnet - Employees list" />}
						/>
						<Route path="*" element={<Error />} />
					</Routes>
				</Layout>
			</EmployeesProvider>
		</>
	)
}

export default App

