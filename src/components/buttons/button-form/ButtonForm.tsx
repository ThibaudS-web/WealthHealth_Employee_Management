import { BtnForm } from "./buttonFormStyle"

function Button(props: {
	background: string
	textColor: string
	role: "register" | "cancel"
	type: "button" | "submit" | "reset"
	onClick?: any
}) {
	const { textColor, background, role, type, onClick } = props

	return (
		<BtnForm
			onClick={onClick}
			type={type}
			background={background}
			textColor={textColor}
			role={role}
		>
			{role}
		</BtnForm>
	)
}

export default Button
