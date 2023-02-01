import styled from "styled-components"

export const FormContainer = styled.div`
	height: auto;
	width: 50%;
	background-color: #d4dea3;
	padding: 25px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`
export const ImageContainer = styled.div`
	height: auto;
	width: 50%;
	@media screen and (max-width: 800px) {
		display: none;
	}
`
export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`
export const Infos = styled.h2`
	color: #5b700c;
	width: 100%;
	margin-bottom: 20px;
	@media screen and (max-width: 425px) {
		font-size: 20px;
	}
`
export const Label = styled.label`
	font-size: 20px;
	align-self: flex-start;
	color: #373737;
	font-weight: 500;
	@media screen and (max-width: 760px) {
		font-size: 16px;
	}
`
export const GlobalInputContainerStyle = {
	display: "flex",
	alignItems: "center",
	marginBottom: "30px",
	justifyContent: "space-between",
	minWidth: "215px"
}

export const InfosInputContainer = styled.div`
	max-width: 350px;
	flex-wrap: wrap;
	${GlobalInputContainerStyle}
`
export const InputContainerInField = styled.div`
	flex-wrap: wrap;
	width: 100%;
	max-width: 450px;
	${GlobalInputContainerStyle}
`
export const FieldSet = styled.fieldset`
	border: 3px #5b700c solid;
	border-radius: 15px;
	padding: 15px;
	margin-bottom: 20px;
`
export const Legend = styled.legend`
	margin-left: 20px;
	color: #5b700c;
	padding: 0 8px;
	font-size: 24px;
	font-weight: 600;
	@media screen and (max-width: 425px) {
		font-size: 20px;
	}
`
export const ButtonContainer = styled.div`
	width: 220px;
	display: flex;
	justify-content: space-between;
`
export const FlexWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`
