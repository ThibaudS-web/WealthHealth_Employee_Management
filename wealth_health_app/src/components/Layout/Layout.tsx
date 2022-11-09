import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const DivFlex = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
`

const Main = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`

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
