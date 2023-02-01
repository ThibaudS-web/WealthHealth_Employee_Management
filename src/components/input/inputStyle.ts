import styled from "styled-components"

interface IInput {
	isValid: boolean | null
}

export const Input = styled.input<IInput>`
	height: 30px;
	border-radius: 15px;
	padding: 10px;
	font-size: 16px;
	font-weight: 600;
	color: #6e8614;
	width: 65%;
	min-width: 150px;
	border: ${(props) => (props.isValid || props.isValid === null ? "none" : "2px red solid")};
	
	@media screen and (max-width: 760px) {
		font-size: 14px;
	}
`
export const Error = styled.span`
	color: red;
`
