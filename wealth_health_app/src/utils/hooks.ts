import { useState } from "react"

function useForm() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		birthday: "",
		startDate: "",
		city: "",
		street: "",
		zipCode: ""
	})

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
		console.log(e.target.value)
	}

	return { handleChange, values }
}

export default useForm
