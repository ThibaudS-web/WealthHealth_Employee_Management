import { useState } from "react"
import { SingleValue } from "react-select"
import ErrorMessage from "./ErrorMessage"
import ValidInput from "./ValidInput"

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

	const [values, setValues] = useState({
		...initialState
	})

	const [validSuccessForm, setValidSuccessForm] = useState({
		...initialState
	})

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}

	const handleChangeSelect = (e: SingleValue<{ value: string; label: string }>, name: string) => {
		if (e) {
			const { value } = e
			setValues({
				...values,
				[name]: value
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

	const isValidSelect = (value: string, id: string) => {
		const isValid = inputValidation.isValidInput(value, id)
		setValidSuccessForm({
			...validSuccessForm,
			[id]: isValid
		})

		return isValid
	}

	const isValidateForm = () => {
		return Object.values(validSuccessForm).every((el) => el)
	}

	const getError = (e: { target: { value: string } }, id: string): string => {
		const { value } = e.target
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
		setValidSuccessForm,
		isValid,
		getError,
		getErrorSelect,
		isValidateForm,
		handleChangeSelect,
		isValidSelect
	}
}

export default useForm
