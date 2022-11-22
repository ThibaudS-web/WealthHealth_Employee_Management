import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import { useEffect, useState } from "react"
import { Error } from "./datePickerStyle"
import ErrorStyleInput from "./setOnError"

function DatePickerInput(props: {
	id: string
	name: string
	setValueOnChange: Function
	onCloseCalendar: Function
	error: Function
	isReset: boolean
	setReset: Function
}) {
	const { id, name, setValueOnChange, onCloseCalendar, error, isReset, setReset } = props

	const errorStyle = new ErrorStyleInput()

	const [startDate, setStartDate] = useState<null | Date>(null)
	const [errorMessage, setErrorMessage] = useState<null | string>(null)
	const [isValid, setIsValid] = useState<null | boolean>(null)

	const clearInput = (reset: boolean) => {
		if (reset) {
			setStartDate(null)
			setReset(false)
		}
	}

	useEffect(() => {
		clearInput(isReset)
		errorStyle.getStyleError(name, isValid)
	}, [isReset, isValid])
	console.log("isValid", isValid)
	const handleOnCloseCalendar = (date: Date | null, id: string) => {
		setIsValid(onCloseCalendar(date, id))
		setErrorMessage(error(date, id))
	}

	return (
		<>
			<DatePicker
				selected={startDate}
				placeholderText="mm/dd/yyyy"
				onChange={(date) => {
					setStartDate(date)
					setValueOnChange(date, name)
				}}
				onCalendarClose={() => handleOnCloseCalendar(startDate, id)}
				id={id}
				name={name}
			/>
			{!isValid && errorMessage && <Error>{errorMessage}</Error>}
		</>
	)
}

export default DatePickerInput
