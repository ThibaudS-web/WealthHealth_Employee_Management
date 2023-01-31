import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"

function stringToBoolean(value: string): boolean {
	return value == "true"
}

const isStrictMode = stringToBoolean(import.meta.env.VITE_REACT_ENABLE_DEBUG)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		{isStrictMode ? (
			<Router>
				<App />
			</Router>
		) : (
			<React.StrictMode>
				<Router>
					<App />
				</Router>
			</React.StrictMode>
		)}
	</>
)

