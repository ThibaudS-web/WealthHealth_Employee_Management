export const setBorderStyle = (element: any, name: string, isValid: null | boolean) => {
	if (isValid && isValid !== null) {
		switch (name) {
			case "startDate":
				element?.style.setProperty("--border-input-startday", "none")
				break
			case "birthday":
				element?.style.setProperty("--border-input-birthday", "none")
				break
		}
	} else if (!isValid && isValid !== null) {
		switch (name) {
			case "startDate":
				element?.style.setProperty("--border-input-startday", "2px solid red")
				break
			case "birthday":
				element?.style.setProperty("--border-input-birthday", "2px solid red")
				break
		}
	}
}
