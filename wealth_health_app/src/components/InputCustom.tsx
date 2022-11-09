import { FocusEvent, useState } from "react"
import styled from "styled-components"


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
	setValueOnChange: Function
	setValueOnBlur: Function
	error: Function
}) {
	const { type, id, name, zipcodeInput, placeholder, setValueOnBlur, setValueOnChange, error } =
		props

	const [errorMessage, setErrorMessage] = useState<null | string>(null)
	const [isValid, setIsValid] = useState<null | boolean>(null)

	const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
		setIsValid(setValueOnBlur(e, id))
		setErrorMessage(error(e, id))
	}

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
					onChange={(e) => {
						setValueOnChange(e)
					}}
					onBlur={(e) => {
						handleOnBlur(e)
					}}
				/>
			) : (
				<Input
					isValid={isValid}
					placeholder={placeholder}
					onChange={(e) => {
						setValueOnChange(e)
					}}
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
