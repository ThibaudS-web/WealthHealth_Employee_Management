class ErrorMessage {
	private emptyInput = "This field is required"
	private errorName = "It must start with a capital letter, between 3 and 20 letters"
	private errorStreet = "Incorrect street value"
	private errorCity = "The city must be capitalized and include only letters"
	private errorZipCode = "The zip code must contain only 5 digits"

	private getErrorName(value: string) {
		if (value.length === 0) return this.emptyInput
		return this.errorName
	}

	private getErrorDate(value: string) {
        if (value.length === 0) return this.emptyInput
        return 'Hello'
	}

	private getErrorStreet(value: string) {
		if (value.length === 0) return this.emptyInput
		return this.errorStreet
	}

	private getErrorCity(value: string) {
		if (value.length === 0) return this.emptyInput
		return this.errorCity
	}

	private getErrorZipCode(value: string) {
		if (value.length === 0) return this.emptyInput
		return this.errorZipCode
	}

	public getErrorMessage(value: string, id: string) {
		switch (id) {
			case "firstName":
				return this.getErrorName(value)
			case "lastName":
				return this.getErrorName(value)
			case "birthday":
				return this.getErrorDate(value)
			case "startDate":
				return this.getErrorDate(value)
			case "city":
				return this.getErrorCity(value)
			case "street":
				return this.getErrorStreet(value)
			case "zipCode":
				return this.getErrorZipCode(value)
			default:
				return "unknown input"
		}
	}
}

export default ErrorMessage
