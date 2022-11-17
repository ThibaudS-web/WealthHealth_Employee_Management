import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"
import styled, { CSSObject } from "styled-components"
// import { customStyle } from "../select/selectStyle"

const defaultStyle = {
	overlay: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute" as "absolute", // cast string to type 'absolute'
		top: "0",
		zIndex: "999"
	},
	container: {
		backgroundColor: "#ffffff",
		width: "auto",
		minHeight: "150px",
		minWidth: "300px",
		height: "auto",
		padding: "1.5rem 0",
		borderRadius: "2rem"
	},
	header: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "1rem",
		padding: "0 1rem"
	},
	content: {
		borderTop: "2px #b0b6af dotted",
		borderBottom: "2px #b0b6af dotted",
		textAlign: "center" as "center",
		padding: "2rem 1rem",
		marginBottom: "1rem",
		fontWeight: "600"
	},
	modalTitle: {
		fontSize: "1.5rem",
		fontWeight: "600",
		color: "#6e8614"
	},
	close: {
		color: "#e00016",
		cursor: "pointer",
		":hover": {
			fontWeight: "600",
			transform: "scale(1.1)"
		}
	},
	footer: {
		display: "flex",
		justifyContent: "space-between",
		padding: "0 1rem"
	}
}

const Overlay = styled.div<any>`
	${(props) => ({ ...defaultStyle.overlay, ...props.customStyle })}
`
const Container = styled.div<any>`
	${(props) => ({ ...defaultStyle.container, ...props.customStyle })}
`
const Header = styled.div<any>`
	${(props) => ({ ...defaultStyle.header, ...props.customStyle })}
`
const Close = styled.div<any>`
	${(props) => ({ ...defaultStyle.close, ...props.customStyle })}
`
const Content = styled.p<any>`
	${(props) => ({ ...defaultStyle.content, ...props.customStyle })}
`
const Title = styled.p<any>`
	${(props) => ({ ...defaultStyle.modalTitle, ...props.customStyle })}
`
const Footer = styled.div<any>`
	${(props) => ({ ...defaultStyle.footer, ...props.customStyle })}
`

const Button = styled.button<{ bgColor?: string; borderColor?: string; bgColorHover?: string }>`
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

function Modal(props: {
	setDisplay: Function
	cross?: boolean
	title?: string
	overlayClosure?: boolean
	children: any
	footer?: any
	contentStyle?: CSSObject
	titleStyle?: CSSObject
	closeStyle?: CSSObject
	containerStyle?: CSSObject
	headerStyle?: CSSObject
	overlayStyle?: CSSObject
	footerStyle?: CSSObject
}) {
	const {
		setDisplay,
		cross,
		title,
		overlayClosure,
		children,
		footer,
		contentStyle,
		titleStyle,
		closeStyle,
		containerStyle,
		headerStyle,
		overlayStyle,
		footerStyle
	} = props

	const navigate = useNavigate()

	// let customStyle = null

	// if (styles) {
	// 	customStyle = styles
	// }

	// console.log(customStyle)

	const closeModal = () => {
		setDisplay()
	}

	const handleRedirection = () => {
		navigate("/employees-list")
	}
	console.log(contentStyle)
	return createPortal(
		<Overlay
			customStyle={overlayStyle ?? defaultStyle.overlay}
			onClick={overlayClosure ? closeModal : undefined}
		>
			<Container customStyle={containerStyle ?? defaultStyle.container}>
				<Header customStyle={headerStyle ?? defaultStyle.header}>
					<Title customStyle={titleStyle ?? defaultStyle.modalTitle}>{title}</Title>
					{cross && (
						<Close
							customStyle={closeStyle ?? defaultStyle.close}
							onClick={closeModal}
							role="button"
						>
							X
						</Close>
					)}
				</Header>
				<Content customStyle={contentStyle ?? defaultStyle.content}>{children}</Content>
				<Footer customStyle={footerStyle ?? defaultStyle.footer}>
					<Button onClick={closeModal} bgColorHover="#d4dea3" borderColor="#6e8614">
						OK
					</Button>
					<Button
						onClick={handleRedirection}
						bgColorHover="#4189d0"
						borderColor="#0e3860"
					>
						Go to employees list -&gt;
					</Button>
				</Footer>
			</Container>
		</Overlay>,
		document.body
	)
}

export default Modal

//TODO: animation sur l'entée / sortie ?
