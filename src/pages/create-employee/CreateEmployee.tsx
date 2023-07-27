import BtnForm from "../../components/buttons/button-form/ButtonForm"
import InputCustom from "../../components/input/InputCustom"
import DropDownSelect from "../../components/select/Select"
import SelectData from "../../models/SelectState"
import StateMapper from "../../UI/mappers/StateMapper"
import { departments } from "../../mocks/department"
import { useForm } from "../../hooks/useForm"
import { states } from "../../mocks/states"
import { useEffect, useState } from "react"
import { Modal } from "thibaud_s-dev-react-modal-custom"
import ButtonModal from "../../components/buttons/button-modal/ButtonModal"
import { useNavigate } from "react-router-dom"
import DatePickerInput from "../../components/date-picker/DatePicker"
import {
	contentErrorStyle,
	contentValidStyle,
	footerStyle,
	titleStyle
} from "../../components/modal/customStyleModal"
import useEmployees from "../../context/EmployeesContext"
import Employee from "../../models/Employee"
import { v4 as uuidv4 } from "uuid"
import {
	FlexWrapper,
	FormContainer,
	Infos,
	InfosInputContainer,
	Label,
	FieldSet,
	Legend,
	InputContainerInField,
	ButtonContainer,
	ImageContainer,
	Image
} from "./styles"

function CreateEmployee(props: { title: string }) {
	document.title = props.title

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

	const { addEmployee, employees } = useEmployees()

	const [isSelectReset, setIsSelectReset] = useState(false)
	const [isDateReset, setIsDateReset] = useState(false)

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [onErrorModal, setOnErrorModal] = useState(false)

	const handleDisplayModal = (error: boolean) => {
		setIsModalOpen(!isModalOpen)
		setOnErrorModal(error)
	}

	const handleSelectReset = (isReset: boolean) => {
		setIsSelectReset(isReset)
	}

	const handleDateReset = (isReset: boolean) => {
		setIsDateReset(isReset)
	}

	const handleFormReset = () => {
		setIsSelectReset(true)
		setIsDateReset(true)
		setValues(initialState)
		setValidSuccessForm(initialState)
	}

	const handleRedirection = () => {
		navigate("/employees-list")
	}

	const statesData = states.map((state) => new StateMapper().mapState(state))
	const departmentsData = departments.map((department) => new SelectData(department, department))
	const employeeId = uuidv4()

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (isValidateForm()) {
			addEmployee(
				new Employee(
					employeeId,
					values.firstName!!,
					values.lastName!!,
					values.startDate!!,
					values.department!!,
					values.birthday!!,
					values.street!!,
					values.city!!,
					values.state!!,
					values.zipCode!!
				)
			)
			handleDisplayModal(false)
			handleFormReset()
		} else {
			handleDisplayModal(true)
		}
	}

	return (
		<>
			<FlexWrapper>
				<FormContainer>
					<form data-testid="form" onSubmit={handleSubmit} onReset={handleFormReset}>
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
								isReset={isDateReset}
								setReset={handleDateReset}
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
								isReset={isDateReset}
								setReset={handleDateReset}
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
								<DropDownSelect
									isReset={isSelectReset}
									id="state"
									name="react-select-2-input"
									label="State"
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
							<DropDownSelect
								isReset={isSelectReset}
								id="department"
								name="react-select-3-input"
								label="Department"
								setReset={handleSelectReset}
								error={getErrorSelect}
								setValueOnBlur={isValidSelect}
								setValueOnChange={handleChangeSelect}
								options={departmentsData}
							/>
						</InfosInputContainer>
						<ButtonContainer>
							<BtnForm
								type="reset"
								content="cancel"
								textColor="#6e8615"
								background="#ffffff"
							/>
							<BtnForm
								type="submit"
								content="register"
								textColor="#ffffff"
								background="#5b700c"
							/>
						</ButtonContainer>
					</form>
					{isModalOpen && (
						<Modal
							showModal={isModalOpen}
							cross
							overlayClosure
							title="HRnet"
							titleStyle={titleStyle}
							contentStyle={onErrorModal ? contentErrorStyle : contentValidStyle}
							footerStyle={footerStyle}
							footerContent={
								<>
									<ButtonModal
										setDisplay={() => handleDisplayModal(onErrorModal)}
										bgColorHover="#d4dea3"
										borderColor="#6e8614"
									>
										Ok
									</ButtonModal>
									{!onErrorModal && (
										<ButtonModal
											redirection={handleRedirection}
											bgColorHover="#4189d0"
											borderColor="#0e3860"
										>
											Go to employees list -&gt;
										</ButtonModal>
									)}
								</>
							}
						>
							{onErrorModal ? "Error: Invalid Form!" : "New employee created!"}
						</Modal>
					)}
				</FormContainer>
				<ImageContainer>
					<Image alt="image wealth health" src="/images/wealth_health_location.webp" />
				</ImageContainer>
			</FlexWrapper>
		</>
	)
}

export default CreateEmployee
