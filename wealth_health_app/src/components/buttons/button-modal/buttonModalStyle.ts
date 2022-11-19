import styled from "styled-components"

export const Button = styled.button<{
	bgColor?: string
	borderColor?: string
	bgColorHover?: string
}>`
	${(props) =>
		`border: ${props.borderColor ? `2px ${props.borderColor} dotted` : "2px #6e8614 dotted"};
        background-color: ${props.bgColor ? props.bgColor : "#ffffff"};
    `};
	width: auto;
	padding: 0.8rem 1.2rem;
	color: #000000;
	font-weight: 600;
	cursor: pointer;
	:hover {
		${(props) => `background-color: ${props.bgColorHover ? props.bgColorHover : "#ffffff"}`};
		color: #ffffff;
	}
`
