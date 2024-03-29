import { useState } from "react"
import { SingleValue } from "react-select"
import ErrorMessage from "../../utils/ErrorMessage"
import ValidInput from "../../utils/ValidInput"
import { InitialeStateValidInput, IntialeStateValuesInput } from "./InitialeStateInterface"

function useForm() {
	const inputValidation = new ValidInput()
	const error = new ErrorMessage()

	const initialState = {
		firstName: null,
		lastName: null,
		birthday: null,
		startDate: null,
		state: null,
		city: null,
		street: null,
		zipCode: null,
		department: null
	}

	const [values, setValues] = useState<IntialeStateValuesInput>(initialState)

	const [validSuccessForm, setValidSuccessForm] = useState<InitialeStateValidInput>(initialState)

	const handleChange = (e: { target: { name: string; value: string } }) => {
		let { name, value } = e.target
		setValues({
			...values,
			[name]: value.length === 0 ? null : value
		})
	}

	const handleChangeDatePicker = (date: Date, name: string) => {
		const formattedDate = date?.toLocaleDateString("us-US").replaceAll("/", "-").split("-")

		const year = formattedDate.at(2)
		const month = formattedDate.at(1)
		const day = formattedDate.at(0)

		const requiredFormatDate = [year, month, day].join("-")

		setValues({
			...values,
			[name]: requiredFormatDate
		})
	}

	const handleChangeSelect = (e: SingleValue<{ value: string; label: string }>, id: string) => {
		if (e) {
			const { value } = e
			
			setValues({
				...values,
				[id]: value
			})
		}
	}

	const isValid = (e: { target: { name: string; value: string } }, id: string) => {
		const { name, value } = e.target
		const isValid = inputValidation.isValidInput(value, id)
		setValidSuccessForm({
			...validSuccessForm,
			[name]: isValid
		})
		return isValid
	}

	const isValidDatePicker = (value: Date, id: string) => {
		const isValid = inputValidation.isValidInput(value, id)
		setValidSuccessForm({
			...validSuccessForm,
			[id]: isValid
		})

		return isValid
	}

	const isValidSelect = (value: string, id: string) => {
		const isValid = inputValidation.isValidInput(value, id)
		setValidSuccessForm({
			...validSuccessForm,
			[id]: isValid
		})

		return isValid
	}

	const isValidateForm = () => {
		return Object.values(validSuccessForm).every((property) => property)
	}

	const getError = (e: { target: { value: string } }, id: string): string => {
		const { value } = e.target
		return error.getErrorMessage(value, id)
	}

	const getErrorDatePicker = (value: string, id: string) => {
		return error.getErrorMessage(value, id)
	}

	const getErrorSelect = (value: string, id: string): string => {
		return error.getErrorMessage(value, id)
	}

	return {
		validSuccessForm,
		handleChange,
		values,
		initialState,
		setValues,
		getErrorDatePicker,
		setValidSuccessForm,
		isValid,
		isValidDatePicker,
		getError,
		getErrorSelect,
		isValidateForm,
		handleChangeSelect,
		handleChangeDatePicker,
		isValidSelect
	}
}

export { useForm }
