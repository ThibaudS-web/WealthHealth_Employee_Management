import { NavLink } from "react-router-dom"
import {
	Container,
	ChildContainer,
	HeaderTitle,
	Logo,
	Navigation,
	Li,
	linkStyle
} from "./headerStyle"

function Header() {
	console.log(process.env.NODE_ENV)
	return (
		<Container>
			<ChildContainer>
				<Logo alt="Wealth Health logo" src="/images/wealthHealth_logo.webp" />
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
