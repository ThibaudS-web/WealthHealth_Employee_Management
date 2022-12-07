class ValidInput {
	public isValidInput(value: string | Date, id: string) {
		switch (id) {
			case "firstName":
				return this.isNameValid(value as string)
			case "lastName":
				return this.isNameValid(value as string)
			case "birthday":
				return this.isDateValid(value as Date)
			case "startDate":
				return this.isDateValid(value as Date)
			case "city":
				return this.isCityValid(value as string)
			case "street":
				return this.isStreetValid(value as string)
			case "zipCode":
				return this.isZipCodeValid(value as string)
			case "state":
				return this.isSelectValid(value as string)
			case "department":
				return this.isSelectValid(value as string)
			default:
				throw new Error("unknown input")
		}
	}

	private isNameValid(value: string): boolean {
		//Uppercase first letter
		const nameRegExp = new RegExp("^[A-Z][a-zA-Z-'^\u00C0-\u017F\\s]{2,20}$", "g")
		return nameRegExp.test(value)
	}

	private isDateValid(value: Date | null): boolean {
		return value !== null
	}

	private isStreetValid(value: string): boolean {
		//Starts with a number
		const streetRegExp = new RegExp("^[0-9][0-9]{0,3}[a-zA-Z-'\u00C0-\u017F\\s]{2,30}$", "g")
		return streetRegExp.test(value)
	}

	private isCityValid(value: string): boolean {
		//Only UPPERCASE
		const cityRegExp = new RegExp("[A-Z-'\u00C0-\u017F\\s]{3,80}$", "g")
		return cityRegExp.test(value)
	}

	private isZipCodeValid(value: string): boolean {
		//Only Numbers
		const zipCodeRegExp = new RegExp("[0-9]{5}$", "g")
		return zipCodeRegExp.test(value)
	}

	private isSelectValid(value: string | null) {
		return value !== null
	}
}

export default ValidInput
