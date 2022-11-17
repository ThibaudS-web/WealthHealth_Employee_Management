import styled from "styled-components"

export const Btn = styled.button<{ textColor: string; background: string }>`
	width: 100px;
	height: 30px;
	font-size: 16px;
	font-weight: 500;
	border-radius: 15px;
	border: none;
	cursor: pointer;
	${(props) =>
		`color: ${props.textColor}; 
		background-color: ${props.background};
	`}
	:hover {
		transform: scale(1.1);
	}
`
