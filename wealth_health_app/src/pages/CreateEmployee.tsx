import styled from "styled-components"
import Button from "../components/Button"

const FormContainer = styled.div`
	height: auto;
	width: 50%;
	background-color: #d4dea3;
	padding: 25px;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`
const ImageContainer = styled.div`
	height: auto;
	width: 50%;
	@media screen and (max-width: 800px) {
		display: none;
	}
`

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`
const Form = styled.form``

const Infos = styled.h2`
	color: #6e8614;
	width: 100%;
	margin-bottom: 20px;
	@media screen and (max-width: 425px) {
		font-size: 20px;
	}
`
const Label = styled.label`
	font-size: 20px;
	color: white;
	font-weight: 500;
	@media screen and (max-width: 760px) {
		font-size: 16px;
	}
`
const GlobalInputStyle = {
	height: "30px",
	borderRadius: "15px",
	border: "none",
	padding: "10px",
	fontSize: "16px",
	fontWeight: "600",
	color: "#6e8614"
}
const Input = styled.input`
	width: 65%;
	min-width: 150px;
	${GlobalInputStyle}
	@media screen and (max-width: 760px) {
		font-size: 14px;
	}
`
const InputInField = styled.input`
	width: 70%;
	max-width: 300px;
	min-width: 150px;
	${GlobalInputStyle}
	@media screen and (max-width: 760px) {
		font-size: 16px;
	}
`

const GlobalInputContainerStyle = {
	display: "flex",
	alignItems: "center",
	marginBottom: "20px"
}

const InfosInputContainer = styled.div`
	min-width: 215px;
	max-width: 350px;
	justify-content: space-between;
	${GlobalInputContainerStyle}
`
const InputContainerInField = styled.div`
	justify-content: space-between;
	width: 100%;
	min-width: 215px;
	max-width: 450px;
	${GlobalInputContainerStyle}
`
const FieldSet = styled.fieldset`
	border: 3px #6e8614 solid;
	border-radius: 15px;
	padding: 15px;
	margin-bottom: 20px;
`
const Legend = styled.legend`
	margin-left: 20px;
	color: #6e8614;
	padding: 0 8px;
	font-size: 24px;
	font-weight: 600;
	@media screen and (max-width: 425px) {
		font-size: 20px;
	}
`
const ButtonContainer = styled.div`
	width: 220px;
	display: flex;
	justify-content: space-between;
`
const BottomForm = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	@media screen and (min-width: 1600px) {
	}
`
const GlobalBtnStyle = {
	width: "100px",
	height: "30px",
	fontSize: "16px",
	fontWeight: "600",
	borderRadius: "15px",
	border: "none",
	boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
	cursor: "pointer"
}
const CancelBtn = styled.button`
	${GlobalBtnStyle}
	color: #6e8614;
	background-color: #ffffff;
	margin-right: 20px;
`
const RegisterBtn = styled.button`
	${GlobalBtnStyle}
	color:#ffffff;
	background-color: #93ad18;
`
const BlocPage = styled.div`
	display: flex;
	height: 100vh;
`
function CreateEmployee(props: { title: string }) {
	document.title = props.title
	
	return (
		<>
			<BlocPage>
				<FormContainer>
					<Form>
						<Infos>Informations</Infos>
						<InfosInputContainer>
							<Label htmlFor="firstName">First name</Label>
							<Input type="text" id="firstName" name="firsName" />
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="lastName">Last name</Label>
							<Input type="text" id="lastName" name="lastName" />
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="birthday">Birdthday</Label>
							<Input type="date" id="birthday" name="birthday" />
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="startDate">Start Date</Label>
							<Input type="date" id="startDate" name="startDate" />
						</InfosInputContainer>
						<FieldSet>
							<Legend>Address</Legend>
							<InputContainerInField>
								<Label htmlFor="state">State</Label>
								<InputInField type="text" id="state" name="state" />
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="city">City</Label>
								<InputInField type="text" id="city" name="city" />
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="street">Street</Label>
								<InputInField type="text" id="street" name="street" />
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="zipCode">Zip code</Label>
								<InputInField type="text" id="zipCode" name="zipCode" />
							</InputContainerInField>
						</FieldSet>
						<BottomForm>
							<InfosInputContainer>
								<Label htmlFor="department">Department</Label>
								<Input type="text" id="department" name="department" />
							</InfosInputContainer>
							<ButtonContainer>
								<Button role="cancel" textColor="#6e8615" background="#ffffff" />
								<Button role="register" textColor="#ffffff" background="#6e8615" />
							</ButtonContainer>
						</BottomForm>
					</Form>
				</FormContainer>
				<ImageContainer>
					<Image src="/src/assets/wealth_health_location.jpg" />
				</ImageContainer>
			</BlocPage>
		</>
	)
}

export default CreateEmployee
