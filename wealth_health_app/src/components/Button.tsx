import styled from "styled-components"

const Btn = styled.button<{ textColor: string; background: string }>`
	width: 100px;
	height: 30px;
	font-size: 16px;
	font-weight: 600;
	border-radius: 15px;
	border: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	${(props) => `color: ${props.textColor};`}
	${(props) => `background-color: ${props.background};`}
`

function Button(props: { background: string; textColor: string; role: string }) {
	const { textColor, background, role } = props
	return (
		<Btn background={background} textColor={textColor}>
			{role === "cancel" ? "cancel" : "register"}
		</Btn>
	)
}

export default Button
