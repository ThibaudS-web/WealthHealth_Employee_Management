import { BtnForm } from "./buttonFormStyle"

function Button(props: {
	background: string
	textColor: string
	role: string
	type: "button" | "submit" | "reset"
	onClick?: any
}) {
	const { textColor, background, role, type, onClick } = props
	// console.log(onClick)
	return (
		<BtnForm onClick={onClick} type={type} background={background} textColor={textColor}>
			{role === "cancel" ? "cancel" : "register"}
		</BtnForm>
	)
}

export default Button
