import { useState } from "react"
import ErrorMessage from "./ErrorMessage"
import ValidInput from "./ValidInput"

function useForm() {
	const inputValidation = new ValidInput()
	const error = new ErrorMessage()

	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		birthday: "",
		startDate: "",
		city: "",
		street: "",
		zipCode: ""
	})

	const [validSuccessForm, setValidSuccessForm] = useState({
		firstName: null,
		lastName: null,
		birthday: null,
		startDate: null,
		city: null,
		street: null,
		zipCode: null
	})

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}

	const isValid = (e: any, id: string) => {
		const { name, value } = e.target
		const isValid = inputValidation.isValidInput(value, id)
		setValidSuccessForm({
			...validSuccessForm,
			[name]: isValid
		})
		return isValid
	}

	const getIsValidateForm = () => {
		return Object.values(validSuccessForm).every((el) => el)
	}

	const getError = (e: any, id: string): string => {
		const { value } = e.target
		return error.getErrorMessage(value, id)
	}

	return { handleChange, values, isValid, getError, getIsValidateForm }
}

export default useForm
