import styled from "styled-components"
import BtnForm from "../components/buttons/button-form/ButtonForm"
import InputCustom from "../components/input/InputCustom"
import DropDownSelect from "../components/select/Select"
import SelectData from "../models/SelectState"
import StateMapper from "../UI/mappers/StateMapper"
import { department } from "../mocks/department"
import useForm from "../utils/formHook"
import { states } from "../mocks/states"
import { useState } from "react"
import Modal from "../components/modal/Modal"
import ButtonModal from "../components/buttons/button-modal/ButtonModal"
import { useNavigate } from "react-router-dom"
import DatePickerInput from "../components/date-picker/DatePicker"

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
	const [startDate, setStartDate] = useState<Date | null>(null)

	const navigate = useNavigate()

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
		getErrorDatePicker,
		setValidSuccessForm,
		isValidateForm,
		handleChangeSelect,
		isValidSelect,
		isValidDatePicker,
		handleChangeDatePicker
	} = useForm()

	console.log("values: ", values)
	console.log("validSuccessForm: ", validSuccessForm)
	const [isSelectReset, setIsSelectReset] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleDisplayModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const handleSelectReset = (isReset: boolean) => {
		setIsSelectReset(isReset)
	}

	const handleFormReset = () => {
		setIsSelectReset(true)
		setValues(initialState)
		setValidSuccessForm(initialState)
	}

	const handleRedirection = () => {
		navigate("/employees-list")
	}

	const statesData = states.map((state) => new StateMapper().mapState(state))
	const departmentsData = department.map((department) => new SelectData(department, department))

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (isValidateForm()) {
			handleDisplayModal()
			handleFormReset()
		} else {
			alert(`Incomplete form!`)
		}
	}

	return (
		<>
			<FormContainer>
				<form onSubmit={handleSubmit} onReset={handleFormReset}>
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
						<DatePickerInput
							id="birthday"
							name="birthday"
							setValueOnChange={handleChangeDatePicker}
							onCloseCalendar={isValidDatePicker}
							error={getErrorDatePicker}
						/>
					</InfosInputContainer>
					<InfosInputContainer>
						<Label htmlFor="startDate">Start Date</Label>
						<DatePickerInput
							id="startDate"
							name="startDate"
							setValueOnChange={handleChangeDatePicker}
							onCloseCalendar={isValidDatePicker}
							error={getErrorDatePicker}
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
					{/* <InfosInputContainer>
						<DatePickerInput
							id="startDate"
							name="startDate"
							setValueOnChange={handleChangeDatePicker}
							onCloseCalendar={isValidDatePicker}
							error={getErrorDatePicker}
						/>
					</InfosInputContainer> */}
					<ButtonContainer>
						<BtnForm
							type="reset"
							role="cancel"
							textColor="#6e8615"
							background="#ffffff"
						/>
						<BtnForm
							type="submit"
							role="register"
							textColor="#ffffff"
							background="#6e8615"
						/>
					</ButtonContainer>
				</form>
				{isModalOpen && (
					<Modal
						showModal={isModalOpen}
						cross={true}
						overlayClosure={true}
						title="HRnet"
						footer={
							<>
								<ButtonModal
									setDisplay={handleDisplayModal}
									bgColorHover="#d4dea3"
									borderColor="#6e8614"
								>
									Ok
								</ButtonModal>
								<ButtonModal
									redirection={handleRedirection}
									bgColorHover="#4189d0"
									borderColor="#0e3860"
								>
									Go to employees list -&gt;
								</ButtonModal>
							</>
						}
					>
						New employee created! {values.firstName}
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
