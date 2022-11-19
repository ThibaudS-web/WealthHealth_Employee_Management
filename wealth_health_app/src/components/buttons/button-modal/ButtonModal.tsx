import { Button } from "./buttonModalStyle"

function ButtonModal(props: {
	setDisplay?: () => void
	redirection?: () => void
	bgColorHover: string
	borderColor: string
	children: string
}) {
	const { bgColorHover, borderColor, children, setDisplay, redirection } = props

	const onClickManagment = setDisplay ?? redirection

	return (
		<Button onClick={onClickManagment} bgColorHover={bgColorHover} borderColor={borderColor}>
			{children}
		</Button>
	)
}

export default ButtonModal
