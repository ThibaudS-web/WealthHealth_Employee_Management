class ValidInput {
	public isValidInput(value: string, id: string) {
		switch (id) {
			case "firstName":
				return this.isNameValid(value)
			case "lastName":
				return this.isNameValid(value)
			case "birthday":
				return this.isDateValid(value)
			case "startDate":
				return this.isDateValid(value)
			case "city":
				return this.isCityValid(value)
			case "street":
				return this.isStreetValid(value)
			case "zipCode":
				return this.isZipCodeValid(value)
			case "state":
				return this.isSelectValid(value)
			case "department":
				return this.isSelectValid(value)
			default:
				throw new Error("unknown input")
		}
	}

	private isNameValid(value: string): boolean {
		//Uppercase first letter
		const nameRegExp = new RegExp("^[A-Z][a-zA-Z-'^\u00C0-\u017F ]{2,20}$", "g")
		return nameRegExp.test(value)
	}

	private isDateValid(value: string): boolean {
		return value.length > 0
	}

	private isStreetValid(value: string): boolean {
		//Starts with a number
		const streetRegExp = new RegExp("^[0-9][0-9]{0,2}[a-zA-Z-'\u00C0-\u017F ]{2,30}$", "g")
		return streetRegExp.test(value)
	}

	private isCityValid(value: string): boolean {
		//Only UPPERCASE
		const cityRegExp = new RegExp("[A-Z-'\u00C0-\u017F ]{3,80}$", "g")
		return cityRegExp.test(value)
	}

	private isZipCodeValid(value: string): boolean {
		//Only Numbers
		const zipCodeRegExp = new RegExp("[0-9]{5}$", "g")
		return zipCodeRegExp.test(value)
	}

	private isSelectValid(value: string | null) {
		// TODO: need to be implement later
		return value !== null
	}
}

export default ValidInput
