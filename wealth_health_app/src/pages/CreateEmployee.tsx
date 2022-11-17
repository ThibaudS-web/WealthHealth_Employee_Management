import styled, { CSSObject } from "styled-components"
import Button from "../components/button/Button"
import InputCustom from "../components/input/InputCustom"
import DropDownSelect from "../components/select/Select"
import SelectData from "../models/SelectState"
import StateMapper from "../UI/mappers/StateMapper"
import { department } from "../mocks/department"
import useForm from "../utils/hooks"
import { states } from "../mocks/states"
import { useState } from "react"
import Modal from "../components/modal/Modal"

const FormContainer = styled.div`
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
const GlobalInputContainerStyle = {
	display: "flex",
	alignItems: "center",
	marginBottom: "30px",
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

function CreateEmployee(props: { title: string }) {
	document.title = props.title

	//Custom Hook for handle form features
	const {
		validSuccessForm,
		handleChange,
		values,
		setValues,
		initialState,
		isValid,
		getError,
		getErrorSelect,
		setValidSuccessForm,
		isValidateForm,
		handleChangeSelect,
		isValidSelect
	} = useForm()

	const handleDisplayModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const [isSelectReset, setIsSelectReset] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const handleSelectReset = (isReset: boolean) => {
		setIsSelectReset(isReset)
	}

	const handleResetForm = () => {
		setIsSelectReset(true)
		setValues(initialState)
		setValidSuccessForm(initialState)
	}

	const statesData = states.map((state) => new StateMapper().mapState(state))
	const departmentsData = department.map((department) => new SelectData(department, department))

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (isValidateForm()) {
			handleDisplayModal()
			// handleResetForm()
		} else {
			alert(`Incomplete form!`)
		}
	}

	const content = (styles: CSSObject, state?: any) => ({
		...styles,
		state
	})

	const contentCustom = {
		color: isValidateForm() ? "blue" : "red"
	}

	console.log(
		content(
			{
				color: "blue"
			},
			isModalOpen
		)
	)

	return (
		<>
			<FormContainer>
				<form onSubmit={handleSubmit} onReset={handleResetForm}>
					<Infos>Informations</Infos>
					<InfosInputContainer>
						<Label htmlFor="firstName">First name</Label>
						<InputCustom
							value={values.firstName}
							placeholder="Firstname"
							type="text"
							id="firstName"
							name="firstName"
							error={getError}
							setValueOnChange={handleChange}
							setValueOnBlur={isValid}
						/>
					</InfosInputContainer>
					<InfosInputContainer>
						<Label htmlFor="lastName">Last name</Label>
						<InputCustom
							value={values.lastName}
							placeholder="Lastname"
							type="text"
							id="lastName"
							name="lastName"
							error={getError}
							setValueOnBlur={isValid}
							setValueOnChange={handleChange}
						/>
					</InfosInputContainer>
					<InfosInputContainer>
						<Label htmlFor="birthday">Birdthday</Label>
						<InputCustom
							value={values.birthday}
							type="date"
							id="birthday"
							name="birthday"
							error={getError}
							setValueOnBlur={isValid}
							setValueOnChange={handleChange}
						/>
					</InfosInputContainer>
					<InfosInputContainer>
						<Label htmlFor="startDate">Start Date</Label>
						<InputCustom
							value={values.startDate}
							type="date"
							id="startDate"
							name="startDate"
							error={getError}
							setValueOnBlur={isValid}
							setValueOnChange={handleChange}
						/>
					</InfosInputContainer>
					<FieldSet>
						<Legend>Address</Legend>
						<InputContainerInField>
							<Label htmlFor="state">State</Label>
							<DropDownSelect
								isReset={isSelectReset}
								id="state"
								name="state"
								setReset={handleSelectReset}
								error={getErrorSelect}
								setValueOnChange={handleChangeSelect}
								options={statesData}
								setValueOnBlur={isValidSelect}
							/>
						</InputContainerInField>
						<InputContainerInField>
							<Label htmlFor="city">City</Label>
							<InputCustom
								value={values.city}
								placeholder="CITY"
								type="text"
								id="city"
								name="city"
								error={getError}
								setValueOnBlur={isValid}
								setValueOnChange={handleChange}
							/>
						</InputContainerInField>
						<InputContainerInField>
							<Label htmlFor="street">Street</Label>
							<InputCustom
								value={values.street}
								placeholder="5 rue des champs"
								type="text"
								id="street"
								name="street"
								error={getError}
								setValueOnBlur={isValid}
								setValueOnChange={handleChange}
							/>
						</InputContainerInField>
						<InputContainerInField>
							<Label htmlFor="zipCode">Zip code</Label>
							<InputCustom
								value={values.zipCode}
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
					<InfosInputContainer>
						<Label htmlFor="department">Department</Label>
						<DropDownSelect
							isReset={isSelectReset}
							id="department"
							name="department"
							setReset={handleSelectReset}
							error={getErrorSelect}
							setValueOnBlur={isValidSelect}
							setValueOnChange={handleChangeSelect}
							options={departmentsData}
						/>
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
				</form>
				{!isModalOpen && (
					<Modal
						setDisplay={handleDisplayModal}
						cross={true}
						overlayClosure={false}
						title="HRnet"
						// contentStyle={}
						// titleStyle={}
						// closeStyle={}
						// containerStyle={}
						// headerStyle={}
						// overlayStyle={}
						// footerStyle={}
						// containerStyle={}
						// footer={(
						// 	<>
						// 		<button>Button 1</button>
						// 	</>
						// )}
					>
						New employee created!
					</Modal>
				)}
			</FormContainer>
			<ImageContainer>
				<Image src="/src/assets/wealth_health_location.jpg" />
			</ImageContainer>
		</>
	)
}

export default CreateEmployee
