import { render, screen } from "@testing-library/react"

import Button from "./ButtonForm"

test("Displays the cancel button", () => {
	render(<Button type="button" background="#ffffff" textColor="#000000" content="cancel"></Button>)

	const button = screen.getByText("cancel")

	expect(button).toBeTruthy()
})

test("Displays the register button", () => {
	render(
		<Button type="button" background="#ffffff" textColor="#000000" content="register"></Button>
	)

	const button = screen.getByText("register")

	expect(button).toBeTruthy()
})
