import { fireEvent, render, screen, renderHook, cleanup } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EmployeesProvider } from "../../context/EmployeesContext"
import CreateEmployee from "./CreateEmployee"
import { useForm } from "../../hooks/useForm"
import { act } from "react-dom/test-utils"

beforeEach(() => {
	render(
		<EmployeesProvider>
			<Routes>
				<Route path="/" element={<CreateEmployee title="RHnet - Create employee" />} />
			</Routes>
		</EmployeesProvider>,
		{ wrapper: BrowserRouter }
	)
})

afterEach(() => {
	cleanup()
})

test("Should have the right values in the inputs on onChange", async () => {
	const firstname: HTMLInputElement = screen.getByPlaceholderText("Firstname")
	const lastname: HTMLInputElement = screen.getByPlaceholderText("Lastname")
	const birthday: any = screen.getAllByPlaceholderText("yyyy/MM/dd")[0]
	const startDate: any = screen.getAllByPlaceholderText("yyyy/MM/dd")[1]
	const state: any = screen.getAllByRole("combobox")[0]
	const city: HTMLInputElement = screen.getByPlaceholderText("CITY")
	const street: HTMLInputElement = screen.getByPlaceholderText("5 rue des champs")
	const zipCode: HTMLInputElement = screen.getByPlaceholderText("eg: 16100")
	const department: any = screen.getAllByRole("combobox")[1]

	fireEvent.change(firstname, { target: { value: "Thibaud" } })
	fireEvent.change(lastname, { target: { value: "Saumureau" } })
	fireEvent.change(birthday, { target: { value: "2000/09/03" } })
	fireEvent.change(startDate, { target: { value: "2020/08/04" } })
	fireEvent.change(state, { target: { value: "Arizona" } })
	fireEvent.change(city, { target: { value: "COGNAC" } })
	fireEvent.change(street, { target: { value: "541 rue louis pasteur" } })
	fireEvent.change(zipCode, { target: { value: "71100" } })
	fireEvent.change(department, { target: { value: "Sales" } })

	expect(firstname.value).toBe("Thibaud")
	expect(lastname.value).toBe("Saumureau")
	expect(birthday.value).toBe("2000/09/03")
	expect(startDate.value).toBe("2020/08/04")
	expect(state.value).toBe("Arizona")
	expect(city.value).toBe("COGNAC")
	expect(street.value).toBe("541 rue louis pasteur")
	expect(zipCode.value).toBe("71100")
	expect(department.value).toBe("Sales")
})

// test("If form is ok, should open modal 'with New employee created!'", () => {
// 	// useForm.mockReturnValue({
// 	// 	isValidateForm: () => true
// 	// })

// 	vi.mock("../../utils/useForm.ts", async () => {
// 		const useForm: any = await vi.importActual("../../utils/useForm.ts")
// 		return {
// 			...useForm,
// 			isValidateForm: vi.fn(() => true)
// 		}
// 	})

// 	fireEvent.submit(screen.getByTestId("form"))

// 	expect(screen.getByText("New employee created!")).toBeTruthy()

	// const mock = vi.fn().mockImplementation(() => true)
	// const { result } = renderHook(() => useForm())
	// result.current.isValidateForm = () => true
	// expect(result.current.isValidateForm()).toBe(true)
	// console.log("resultOfFormValidation : ", result.current.isValidateForm())
	// const spyOnValidateForm = vi.spyOn(result.current, "isValidateForm")
	// result.current.isValidateForm()
	// expect(spyOnValidateForm).toHaveBeenCalledOnce()
// })

// // test("If form is invalid, should open modal 'Error: Invalid Form!'")
