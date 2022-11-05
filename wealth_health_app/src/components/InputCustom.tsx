import { FocusEvent, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import ErrorMessage from "../utils/ErrorMessage"
import ValidInput from "../utils/ValidInput"

const Input = styled.input`
	height: 30px;
	border-radius: 15px;
	border: none;
	padding: 10px;
	font-size: 16px;
	font-weight: 600;
	color: #6e8614;
	width: 65%;
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

	return (
		<>
			{zipcodeInput ? (
				<Input
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
			<Error>{isValid !== null && !isValid ? `${errorMessage}` : ""}</Error>
		</>
	)
}

export default InputCustom
