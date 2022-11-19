export const defaultStyle = {
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
		width: "100%",
		minWidth: "300px",
		maxWidth: "25%",
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
		fontSize: "1.1rem",
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
