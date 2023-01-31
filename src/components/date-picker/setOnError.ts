class ErrorStyleInput {
	private element = document.getElementById("root")

	public getStyleError(name: string, isValid: null | boolean) {
		if (isValid && isValid !== null) {
			this.cleanError(name)
		} else if (!isValid && isValid !== null) {
			this.setError(name)
		}
	}

	private setError(name: string) {
		switch (name) {
			case "startDate":
				this.element?.style.setProperty("--border-input-startday", "2px solid red")
				break
			case "birthday":
				this.element?.style.setProperty("--border-input-birthday", "2px solid red")
				break
		}
	}

	private cleanError(name: string) {
		switch (name) {
			case "startDate":
				this.element?.style.setProperty("--border-input-startday", "none")
				break
			case "birthday":
				this.element?.style.setProperty("--border-input-birthday", "none")
				break
		}
	}
}

export default ErrorStyleInput
