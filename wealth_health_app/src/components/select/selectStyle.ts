import styled from "styled-components"

export const customStyle = (isValid: boolean | null) => {
	const container = (styles: any) => (
		console.log(styles),
		{
			...styles,
			width: "65%",
			minWidth: "150px",
			fontSize: "16px",
			whiteSpace: "nowrap"
		}
	)
	const placeholder = (styles: any) => ({
		...styles,
		opacity: "0.4",
		fontWeight: "600"
	})
	const control = (styles: any) => ({
		...styles,
		borderRadius: "15px",
		boxShadow: "none",
		borderColor: "none",
		border: `${isValid || isValid === null ? "none" : "2px red solid"}`,
		"&:hover": {
			borderColor: "none"
		}
	})
	const singleValue = (styles: any) => ({ ...styles, color: "#6e8614", fontWeight: "600" })
	const menu = (styles: any) => ({ ...styles, color: "#6e8614", fontWeight: "600" })

	return { container, placeholder, control, singleValue, menu }
}

export const Error = styled.span`
	color: red;
`
