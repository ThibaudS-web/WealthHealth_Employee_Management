import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
// import Logo from "../SVG/Logo"

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 100%;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	position: sticky;
	z-index: 1;
`
const Logo = styled.img`
	width: 150px;
	height: 140px;
`
const ChildContainer = styled.div`
	align-self: center;
	display: flex;
	flex-direction: column;
	padding: 5px 0;
	align-items: center;
`

const HeaderTitle = styled.h1`
	color: #6e8615;
	font-size: 26px;
	text-align: center;
	@media screen and (max-width: 425px) {
		width: 100%;
		font-size: 20px;
	}
`

const LiContainer = styled.ul`
	list-style: none;
	display: flex;
	width: 320px;
	justify-content: space-between;
	@media screen and (max-width: 425px) {
		width: 100%;
		font-size: 12px;
	}
`
const Li = styled.li`
	text-decoration: none;
	text-align: center;
	@media screen and (max-width: 425px) {
		width: 50%;
	}
`
const StyledLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	height: 100%;
	font-weight: 600;
	padding: 10px;
	display: block;
	color: #ffffff;
	background-color: #6e8615;
	:hover {
		background-color: #ffffff;
		color: #6e8615;
	}
`

function Header() {
	return (	
		<Container>
			<ChildContainer>
				{/* <Logo /> */}
				<Logo src="/src/assets/wealthHealth_logo.jpg" />
				<HeaderTitle>HRnet - Create employee</HeaderTitle>
			</ChildContainer>
			<nav>
				<LiContainer>
					<Li>
						<StyledLink to="/">Register an employee</StyledLink>
					</Li>
					<Li>
						<StyledLink to="/employees-list">All employees</StyledLink>
					</Li>
				</LiContainer>
			</nav>
		</Container>
	)
}

export default Header
