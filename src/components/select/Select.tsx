import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import { Label } from "../../pages/create-employee/styles"
import { customStyle, Error } from "./selectStyle"

function DropDownSelect(props: {
	options: { value: string; label: string }[]
	name: string
	id: string
	label: string
	error: Function
	isReset: boolean
	setReset: Function
	setValueOnChange: Function
	setValueOnBlur: Function
}) {
	const { options, setValueOnChange, name, setValueOnBlur, id, error, isReset, setReset, label } =
		props

	const selectRef = useRef<any>()

	const [isValid, setIsValid] = useState<null | boolean>(null)
	const [errorMessage, setErrorMessage] = useState<null | string>(null)

	const clearInput = (reset: boolean) => {
		if (reset) {
			selectRef.current.clearValue()
			setReset(false)
		}
	}

	const onBlur = () => {
		const currentValue: string | null = selectRef.current?.getValue()[0]?.label ?? null
		setIsValid(setValueOnBlur(currentValue, id))
		setErrorMessage(error(currentValue, id))
	}

	useEffect(() => {
		clearInput(isReset)
	})

	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<Select
				ref={selectRef}
				placeholder={`Select ${label}`}
				name={name}
				id={id}
				onBlur={onBlur}
				onChange={(e) => {
					setValueOnChange(e, name)
				}}
				options={options}
				styles={customStyle(isValid)}
			/>
			{!isValid && errorMessage && <Error>{errorMessage}</Error>}
		</>
	)
}

export default DropDownSelect
