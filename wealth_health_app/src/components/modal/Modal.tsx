import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { CSSObject } from "styled-components"
import { Overlay, Container, Content, Title, Header, Footer, Close } from "./customStyle"
import { defaultStyle } from "./defaultStyle"

function Modal(props: {
	showModal: boolean
	cross?: boolean
	title?: string
	overlayClosure?: boolean
	children: any
	footer?: JSX.Element
	contentStyle?: CSSObject
	titleStyle?: CSSObject 
	closeStyle?: CSSObject
	containerStyle?: CSSObject
	headerStyle?: CSSObject
	overlayStyle?: CSSObject
	footerStyle?: CSSObject
}) {
	const {
		showModal,
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

	const [displayModal, setDisplayModal] = useState<boolean | null>(showModal)

	const stopPropagation = (e: { stopPropagation: () => void }) => {
		e.stopPropagation()
	}

	return createPortal(
		<>
			{displayModal && (
				<Overlay
					customStyle={overlayStyle ?? defaultStyle.overlay}
					onClick={overlayClosure ? () => setDisplayModal(false) : undefined}
				>
					<Container
						onClick={stopPropagation}
						customStyle={containerStyle ?? defaultStyle.container}
					>
						<Header customStyle={headerStyle ?? defaultStyle.header}>
							<Title customStyle={titleStyle ?? defaultStyle.modalTitle}>
								{title}
							</Title>

							{cross && (
								<Close
									customStyle={closeStyle ?? defaultStyle.close}
									onClick={() => setDisplayModal(false)}
									role="button"
								>
									X
								</Close>
							)}
						</Header>
						<Content customStyle={contentStyle ?? defaultStyle.content}>
							{children}
						</Content>
						<Footer customStyle={footerStyle ?? defaultStyle.footer}>{footer}</Footer>
					</Container>
				</Overlay>
			)}
		</>,
		document.body
	)
}

export default Modal

//TODO: animation sur l'entée / sortie ?
