import { FocusEvent, useState } from "react"
import { Input, Error } from "./inputStyle"

function InputCustom(props: {
	placeholder?: string
	type: string
	id: string
	name: string
	zipcodeInput?: boolean
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
