import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Button from "../components/Button"
import InputCustom from "../components/InputCustom"
import ValidInput from "../utils/ValidInput"
import useForm from "../utils/hooks"

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
	align-self: flex-start;
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
	marginBottom: "20px",
	justifyContent: "space-between",
	minWidth: "215px"
}

const InfosInputContainer = styled.div`
	max-width: 350px;
	flex-wrap: wrap;
	${GlobalInputContainerStyle}
`
const InputContainerInField = styled.div`
	flex-wrap: wrap;
	width: 100%;
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

	//Custom Hook for handle form features
	const { handleChange, values, isValid, getError, getIsValidateForm } = useForm()

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()

		if (getIsValidateForm()) {
			console.log("form sent!", values)
		} else {
			console.log("form invalid!", values)
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
								placeholder="Firstname"
								type="text"
								id="firstName"
								name="firstName"
								zipcodeInput={false}
								error={getError}
								setValueOnChange={handleChange}
								setValueOnBlur={isValid}
							/>
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="lastName">Last name</Label>
							<InputCustom
								placeholder="Lastname"
								type="text"
								id="lastName"
								name="lastName"
								zipcodeInput={false}
								error={getError}
								setValueOnBlur={isValid}
								setValueOnChange={handleChange}
							/>
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="birthday">Birdthday</Label>
							<InputCustom
								type="date"
								id="birthday"
								name="birthday"
								zipcodeInput={false}
								error={getError}
								setValueOnBlur={isValid}
								setValueOnChange={handleChange}
							/>
						</InfosInputContainer>
						<InfosInputContainer>
							<Label htmlFor="startDate">Start Date</Label>
							<InputCustom
								type="date"
								id="startDate"
								name="startDate"
								zipcodeInput={false}
								error={getError}
								setValueOnBlur={isValid}
								setValueOnChange={handleChange}
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
									placeholder="CITY"
									type="text"
									id="city"
									name="city"
									zipcodeInput={false}
									error={getError}
									setValueOnBlur={isValid}
									setValueOnChange={handleChange}
								/>
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="street">Street</Label>
								<InputCustom
									placeholder="5 rue des champs"
									type="text"
									id="street"
									name="street"
									zipcodeInput={false}
									error={getError}
									setValueOnBlur={isValid}
									setValueOnChange={handleChange}
								/>
							</InputContainerInField>
							<InputContainerInField>
								<Label htmlFor="zipCode">Zip code</Label>
								<InputCustom
									placeholder="eg: 16100"
									type="text"
									id="zipCode"
									name="zipCode"
									zipcodeInput={true}
									error={getError}
									setValueOnBlur={isValid}
									setValueOnChange={handleChange}
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
