import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "./useForm"

const { result } = renderHook(() => useForm())

function returnTargetValueOnHandleChange(value: string, name: string) {
	act(() => {
		result.current.handleChange({ target: { value, name } })
	})
	return value
}

function returnTargetValueOnHandleChangeSelect(value: string, label: string, name: string) {
	act(() => {
		result.current.handleChangeSelect({ value, label }, name)
	})
	return value
}

function returnTargetValueOnHandleChangeDatePicker(
	date: Date,
	name: string,
	formattedDate: string
) {
	act(() => {
		result.current.handleChangeDatePicker(date, name)
	})
	return formattedDate
}

function isValidInput(name: string, value: string, id: string) {
	act(() => {
		result.current.isValid({ target: { name, value } }, id)
	})
}

function isValidDateInput(date: Date, id: string) {
	act(() => {
		result.current.isValidDatePicker(date, id)
	})
}

function isValidSelectInput(value: string, id: string) {
	act(() => {
		result.current.isValidSelect(value, id)
	})
}

test("All inputs are true for the validation, the methode isValidateForm should return true", () => {
	const { result } = renderHook(() => useForm())

	act(() => {
		result.current.setValidSuccessForm({
			firstName: true,
			lastName: true,
			birthday: true,
			startDate: true,
			state: true,
			city: true,
			street: true,
			zipCode: true,
			department: true
		})
	})

	expect(result.current.isValidateForm()).toBe(true)
})

test("Once input is false for the validation, the methode isValidateForm should return false", () => {
	const { result } = renderHook(() => useForm())

	result.current.setValidSuccessForm({
		firstName: false,
		lastName: true,
		birthday: true,
		startDate: true,
		state: true,
		city: true,
		street: true,
		zipCode: true,
		department: true
	})

	expect(result.current.isValidateForm()).toBe(false)
})

test("Should return error message for firstName Input", () => {
	expect(result.current.getError({ target: { value: "john" } }, "firstName")).toBe(
		"It must start with a capital letter, between 3 and 20 letters"
	)
})

test("Should return error message for firstName Input with empty value", () => {
	expect(result.current.getError({ target: { value: "" } }, "firstName")).toBe(
		"This field is required"
	)
})

test("Should return error message for birthday Input", () => {
	expect(result.current.getErrorDatePicker("", "birthday")).toBe("This field is required")
})

test("Should return error message for city Input", () => {
	expect(result.current.getError({ target: { value: "paris" } }, "city")).toBe(
		"The city must be capitalized and include only letters"
	)
})

test("Should return error message for city Input with empty value", () => {
	expect(result.current.getError({ target: { value: "" } }, "city")).toBe(
		"This field is required"
	)
})

test("Should return error message for street Input", () => {
	expect(result.current.getError({ target: { value: "street name" } }, "street")).toBe(
		"Incorrect street value"
	)
})
test("Should return error message for street Input with empty value", () => {
	expect(result.current.getError({ target: { value: "" } }, "street")).toBe(
		"This field is required"
	)
})

test("Should return error message for zipCode Input", () => {
	expect(result.current.getError({ target: { value: "5221" } }, "zipCode")).toBe(
		"The zip code must contain only 5 digits"
	)
})
test("Should return error message for zipCode Input with empty value", () => {
	expect(result.current.getError({ target: { value: "" } }, "zipCode")).toBe(
		"This field is required"
	)
})
test("Should return error message for department Input with empty value", () => {
	expect(result.current.getError({ target: { value: "" } }, "department")).toBe(
		"This field is required"
	)
})

// check: https://jestjs.io/docs/api#each
test.each([
	[returnTargetValueOnHandleChange("John", "firstName"), result.current.values.firstName],
	[returnTargetValueOnHandleChange("Doe", "lastName"), result.current.values.lastName],
	[returnTargetValueOnHandleChange("PARIS", "city"), result.current.values.city],
	[returnTargetValueOnHandleChange("51 rue victor hugo", "street"), result.current.values.street],
	[returnTargetValueOnHandleChange("16100", "zipCode"), result.current.values.zipCode],
	[
		returnTargetValueOnHandleChangeSelect("Arizona", "Arizona", "state"),
		result.current.values.state
	],
	[
		returnTargetValueOnHandleChangeSelect("Sales", "Sales", "department"),
		result.current.values.department
	],
	[
		returnTargetValueOnHandleChangeDatePicker(new Date("1993/07/01"), "birthday", "1993-07-01"),
		result.current.values.birthday
	],
	[
		returnTargetValueOnHandleChangeDatePicker(
			new Date("2022/12/01"),
			"startDate",
			"2022-12-01"
		),
		result.current.values.startDate
	]
])(
	`The handleChange Methods should be set correctly the values state object %s and %s `,
	(inputValueOnChange, expected) => {
		expect(inputValueOnChange).toBe(expected)
	}
)

test.each([
	[isValidInput("firstName", "John", "firstName"), result.current.validSuccessForm.firstName],
	[isValidInput("city", "PARIS", "city"), result.current.validSuccessForm.city],
	[isValidInput("street", "51 rue pastier", "street"), result.current.validSuccessForm.street],
	[isValidInput("zipCode", "16100", "zipCode"), result.current.validSuccessForm.zipCode],
	[
		isValidDateInput(new Date("1993/12/01"), "birthday"),
		result.current.validSuccessForm.birthday
	],
	[
		isValidDateInput(new Date("2022/06/01"), "startDate"),
		result.current.validSuccessForm.startDate
	],
	[isValidSelectInput("Sales", "department"), result.current.validSuccessForm.department],
	[isValidSelectInput("Arizona", "state"), result.current.validSuccessForm.state]
])(
	"The isValid methods should return true and set validSuccessForm properties at true",
	(isValidFunction, isValidValue) => {
		expect(isValidValue).toBeTruthy()
	}
)
