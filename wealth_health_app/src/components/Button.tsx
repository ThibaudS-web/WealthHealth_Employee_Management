import styled from "styled-components"

const Btn = styled.button<{ textColor: string; background: string }>`
	width: 100px;
	height: 30px;
	font-size: 16px;
	font-weight: 500;
	border-radius: 15px;
	border: none;
	cursor: pointer;
	${(props) => `color: ${props.textColor};`}
	${(props) => `background-color: ${props.background};`}
	:hover {
		transform: scale(1.1);
	}
`

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
