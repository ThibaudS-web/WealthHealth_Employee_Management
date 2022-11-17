import { useEffect, useState } from "react"
import { NavLink as Link, NavLink } from "react-router-dom"
import styled from "styled-components"
// import Logo from "../SVG/Logo"

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	flex-direction: column;
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

const Navigation = styled.ul`
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

const linkStyle = (props: { isActive: boolean }) => ({
	width: "100%",
	height: "100%",
	fontWeight: 600,
	textDecoration: "none",
	padding: "10px",
	display: "block",
	color: props.isActive ? "#6e8614" : "white",
	backgroundColor: props.isActive ? "#ffffff" : "#6e8614",
	border: props.isActive ? "1px solid #6e8614" : "none"
})

function Header() {
	return (
		<Container>
			<ChildContainer>
				<Logo src="/src/assets/wealthHealth_logo.jpg" />
				<HeaderTitle>HRnet - Create employee</HeaderTitle>
			</ChildContainer>
			<nav>
				<Navigation>
					<Li>
						<NavLink style={linkStyle} to="/">
							Register an employee
						</NavLink>
					</Li>
					<Li>
						<NavLink style={linkStyle} to="/employees-list">
							All employees
						</NavLink>
					</Li>
				</Navigation>
			</nav>
		</Container>
	)
}

export default Header
