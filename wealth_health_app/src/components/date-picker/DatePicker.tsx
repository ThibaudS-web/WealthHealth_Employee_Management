import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import { useState } from "react"
import { Error } from "./datePickerStyle"

function DatePickerInput(props: {
	id: string
	name: string
	setValueOnChange: Function
	onCloseCalendar: Function
	error: Function
}) {
	const { id, name, setValueOnChange, onCloseCalendar, error } = props

	const [startDate, setStartDate] = useState<Date | null>(null)

	const [errorMessage, setErrorMessage] = useState<null | string>(null)
	const [isValid, setIsValid] = useState<null | boolean>(null)

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
