import Header from "../header/Header"
import Footer from "../footer/Footer"
import { DivFlex, Main } from "./layoutStyle"

function Layout(props: { children: JSX.Element }) {
	return (
		<>
			<DivFlex>
				<Header />
				<Main>{props.children}</Main>
				<Footer />
			</DivFlex>
		</>
	)
}

export default Layout
