import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Button from "../components/Button"
import InputCustom from "../components/InputCustom"
import ValidInput from "../utils/ValidInput"

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
const Input = styled.input`
	height: 30px;
	border-radius: 15px;
	border: none;
	padding: 10px;
	font-size: 16px;
	font-weight: 600;
	color: #6e8614;
	width: 65%;
	min-width: 150px;
	@media screen and (max-width: 760px) {
		font-size: 14px;
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
const BlocPage = styled.div`
	display: flex;
	height: 100vh;
`

function CreateEmployee(props: { title: string }) {
	document.title = props.title
	// const [firstname, setFirstName] = useState("")
	// const [lastName, setLastName] = useState("")
	// const [birthday, setBirthday] = useState<null | string>(null)
	// const [startDate, setStartDate] = useState<null | string>(null)
	// const [city, setCity] = useState<null | string>(null)
	// const [street, setStreet] = useState<null | string>(null)
	// const [zipCode, setZipCode] = useState<null | string>(null)
	
	const [inputValues, setInputValues] = useState({
		firstname: "",
		lastname: "",
		birthday: "",
		startdate: "",
		city: "",
		street: "",
		zipcode: ""
	})

	const [isValidFirstname, setIsValidFirstname] = useState<null | boolean>(null)
	const [isValidLastname, setIsValidLastname] = useState<null | boolean>(null)
	const [isValidBirthday, setIsValidBirthday] = useState<null | boolean>(null)
	const [isValidStartDate, setIsValidStartDate] = useState<null | boolean>(null)
	const [isValidCity, setIsValidCity] = useState<null | boolean>(null)
	const [isValidStreet, setIsValidStreet] = useState<null | boolean>(null)
	const [isValidZipCode, setIsValidZipCode] = useState<null | boolean>(null)

	const areInputsValid = [
		isValidFirstname,
		isValidLastname,
		isValidBirthday,
		isValidCity,
		isValidStreet,
		isValidZipCode
	]

	// const formData = {
	// 	// firstname,
	// 	// lastName,
	// 	// birthday,
	// 	// startDate,
	// 	// city,
	// 	// street,
	// 	// zipCode
	// }
	
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log(areInputsValid)
		if (areInputsValid.every((isValidInput) => isValidInput)) {
			console.log("SendForm")
		} else {
			console.log("no")
		}
	}

	return (
		<>
			<BlocPage>
				<FormContainer>
					<form onSubmit={handleSubmit}>
						<Infos>Informations</Infos>
						<InfosInputContainer>
							<Label htmlFor="firstName">First name</Label>
							<InputCustom
								isValid={isValidFirstname}
								placeholder="Firstname"
								type="text"
								id="firstName"
								name="firsName"
								zipcodeInput={false}
								// setValueOnChange={setFirstName}
								setValueOnBlur={setIsValidFirstname}
							/>
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="lastName">Last name</Label>
							<InputCustom
								isValid={isValidLastname}
								placeholder="Lastname"
								type="text"
								id="lastName"
								name="lastName"
								zipcodeInput={false}
								setValueOnBlur={setIsValidLastname}
								// setValueOnChange={setLastName}
							/>
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="birthday">Birdthday</Label>
							<InputCustom
								isValid={isValidBirthday}
								type="date"
								id="birthday"
								name="birthday"
								zipcodeInput={false}
								setValueOnBlur={setIsValidBirthday}
								// setValueOnChange={setBirthday}
							/>
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="startDate">Start Date</Label>
							<InputCustom
								isValid={isValidStartDate}
								type="date"
								id="startDate"
								name="startDate"
								zipcodeInput={false}
								setValueOnBlur={setIsValidStartDate}
								// setValueOnChange={setStartDate}
							/>
						</InfosInputContainer>
						<FieldSet>
							<Legend>Address</Legend>
							<InputContainerInField>
								<Label htmlFor="state">State</Label>
								<Input type="text" id="state" name="state" />
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="city">City</Label>
								<InputCustom
									isValid={isValidCity}
									placeholder="CITY"
									type="text"
									id="city"
									name="city"
									zipcodeInput={false}
									setValueOnBlur={setIsValidCity}
									// setValueOnChange={setCity}
								/>
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="street">Street</Label>
								<InputCustom
									isValid={isValidStreet}
									placeholder="5 rue des champs"
									type="text"
									id="street"
									name="street"
									zipcodeInput={false}
									setValueOnBlur={setIsValidStreet}
									// setValueOnChange={setStreet}
								/>
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="zipCode">Zip code</Label>
								<InputCustom
									isValid={isValidZipCode}
									placeholder="eg: 16100"
									type="text"
									id="zipCode"
									name="zipCode"
									zipcodeInput={true}
									setValueOnBlur={setIsValidZipCode}
									// setValueOnChange={setZipCode}
								/>
							</InputContainerInField>
						</FieldSet>
						<BottomForm>
							<InfosInputContainer>
								<Label htmlFor="department">Department</Label>
								<Input type="text" id="department" name="department" />
							</InfosInputContainer>
							<ButtonContainer>
								<Button
									type="reset"
									role="cancel"
									textColor="#6e8615"
									background="#ffffff"
								/>
								<Button
									type="submit"
									role="register"
									textColor="#ffffff"
									background="#6e8615"
								/>
							</ButtonContainer>
						</BottomForm>
					</form>
				</FormContainer>
				<ImageContainer>
					<Image src="/src/assets/wealth_health_location.jpg" />
				</ImageContainer>
			</BlocPage>
		</>
	)
}

export default CreateEmployee

//NEED TO IMPLEMENT DROPDOWN FOR STATE AND DEPARTMENT