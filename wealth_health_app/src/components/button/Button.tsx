import { Btn } from "./buttonStyle"

function Button(props: {
	background: string
	textColor: string
	role: string
	type?: "button" | "submit" | "reset"
}) {
	const { textColor, background, role, type } = props
	return (
		<Btn type={type} background={background} textColor={textColor}>
			{role === "cancel" ? "cancel" : "register"}
		</Btn>
	)
}

export default Button
