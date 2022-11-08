import { FocusEvent, useEffect, useState } from "react"
import styled from "styled-components"
import ErrorMessage from "../utils/ErrorMessage"
import ValidInput from "../utils/ValidInput"

interface IInput {
	isValid: boolean | null
}

const Input = styled.input<IInput>`
	height: 30px;
	border-radius: 15px;
	border: ${(props) => (props.isValid || props.isValid === null ? "none" : "2px red solid")};
	padding: 10px;
	font-size: 16px;
	font-weight: 600;
	color: #6e8614;
	width: 65%;
	margin-bottom: 10px;
	min-width: 150px;
	::placeholder {
		opacity: 0.4;
	}
	@media screen and (max-width: 760px) {
		font-size: 14px;
	}
`
const Error = styled.span`
	color: red;
`

function InputCustom(props: {
	placeholder?: string
	type: string
	id: string
	name: string
	zipcodeInput: boolean
	// setValueOnChange: any
	isValid: boolean | null
	setValueOnBlur: any
}) {
	const { type, id, name, zipcodeInput, placeholder, isValid, setValueOnBlur } = props

	const inputValidation = new ValidInput()
	const error = new ErrorMessage()

	const [errorMessage, setErrorMessage] = useState<null | string>(null)

	const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
		setValueOnBlur(inputValidation.isValidInput(e.target.value, id))
		setErrorMessage(error.getErrorMessage(e.target.value, id))
		console.log(error.getErrorMessage(e.target.value, id))
	}

	console.log("isValid: ", isValid, "errorMessage: ", errorMessage)
	console.log(Boolean(!isValid && errorMessage))
	return (
		<>
			{zipcodeInput ? (
				<Input
					isValid={isValid}
					placeholder={placeholder}
					maxLength={5}
					minLength={5}
					type={type}
					id={id}
					name={name}
					// onChange={(e) => setValueOnChange(e.target.value)}
					onBlur={(e) => {
						handleOnBlur(e)
					}}
				/>
			) : (
				<Input
					isValid={isValid}
					placeholder={placeholder}
					// onChange={(e) => {
					// 	setValueOnChange(e.target.value)
					// }}
					onBlur={(e) => {
						handleOnBlur(e)
					}}
					type={type}
					id={id}
					name={name}
				/>
			)}
			{!isValid && errorMessage && <Error>{errorMessage}</Error>}
		</>
	)
}

export default InputCustom
