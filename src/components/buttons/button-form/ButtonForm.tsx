import { BtnForm } from "./buttonFormStyle"

function Button(props: {
	background: string
	textColor: string
	content: "register" | "cancel"
	type: "button" | "submit" | "reset"
	onClick?: any
}) {
	const { textColor, background, type, onClick, content } = props

	return (
		<BtnForm
			onClick={onClick}
			type={type}
			background={background}
			textColor={textColor}
			role="button"
		>
			{content}
		</BtnForm>
	)
}

export default Button
