import styled, { css } from "styled-components"

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	z-index: 1;
`
export const Logo = styled.img`
	width: 150px;
	height: 140px;
`
export const ChildContainer = styled.div`
	align-self: center;
	display: flex;
	flex-direction: column;
	padding: 5px 0;
	align-items: center;
`

export const HeaderTitle = styled.h1`
	color: #6e8615;
	font-size: 26px;
	text-align: center;
	@media screen and (max-width: 425px) {
		width: 100%;
		font-size: 20px;
	}
`

export const Navigation = styled.ul`
	margin-left: 25px;
	list-style: none;
	display: flex;
	width: auto;
	@media screen and (max-width: 425px) {
		width: 100%;
		font-size: 12px;
		margin-left: 0;
	}
`
export const Li = styled.li`
	text-decoration: none;
	text-align: center;
	transform-origin: bottom;
	z-index: 1;
	:last-child {
		margin: 0;
	}
	@media screen and (max-width: 425px) {
		width: 50%;
		margin: 0;
	}
`

export const linkStyle = (props: { isActive: boolean }) => ({
	width: "100%",
	height: "100%",
	fontWeight: 600,
	textDecoration: "none",
	padding: "10px",
	display: "block",
	color: props.isActive ? "white" : "#5b700c",
	backgroundColor: props.isActive ? "#5b700c" : "#ffffff",
	border: "1px solid #5b700c"
})
