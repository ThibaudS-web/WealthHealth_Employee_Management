import styled from "styled-components"
import { defaultStyle } from "./defaultStyle"

export const Overlay = styled.div<any>`
	${(props) => ({ ...defaultStyle.overlay, ...props.customStyle })}
`
export const Container = styled.div<any>`
	${(props) => ({ ...defaultStyle.container, ...props.customStyle })}
`
export const Header = styled.div<any>`
	${(props) => ({ ...defaultStyle.header, ...props.customStyle })}
`
export const Close = styled.div<any>`
	${(props) => ({ ...defaultStyle.close, ...props.customStyle })}
`
export const Content = styled.p<any>`
	${(props) => ({ ...defaultStyle.content, ...props.customStyle })}
`
export const Title = styled.p<any>`
	${(props) => ({ ...defaultStyle.modalTitle, ...props.customStyle })}
`
export const Footer = styled.div<any>`
	${(props) => ({ ...defaultStyle.footer, ...props.customStyle })}
`
	
