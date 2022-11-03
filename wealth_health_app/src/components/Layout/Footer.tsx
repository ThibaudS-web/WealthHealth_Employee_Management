import styled from "styled-components"

const Container = styled.div`
	background-color: #eae1df;
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
`

const Copyright = styled.p`
	color: #b79492;
	font-weight: bold;
	font-size: 16px;
	align-self: center;
`

function Footer() {
	return (
		<Container>
			<Copyright>© Copyright 2022 - Wealth Health</Copyright>
		</Container>
	)
}

export default Footer
