import Header from "./Header"
import Footer from "./Footer"

function Layout(props: { children: JSX.Element }) {
	return (
		<>
			<div>
				<Header />
				<main>{props.children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
