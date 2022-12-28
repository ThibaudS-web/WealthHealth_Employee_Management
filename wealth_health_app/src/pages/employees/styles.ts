import styled from "styled-components"

export const BackgroundEmployeesPage = styled.div`
	background-color: #d4dea3;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const Input = styled.input`
	height: 30px;
	border-radius: 15px;
	border: none;
	padding: 10px;
	font-size: 16px;
	font-weight: 600;
	color: #6e8614;
	width: 250px;
	margin-right: 2rem;
	::placeholder {
		opacity: 0.4;
	}
	@media screen and (max-width: 760px) {
		font-size: 14px;
	}
	@media screen and (max-width: 500px) {
		margin: 1rem;

		width: 80%;
	}
`
export const TableContainer = styled.div`
	background-color: #ffffff;
	border-radius: 2rem;
	max-width: 100%;
	min-width: 280px;
	padding: 3rem;
	max-height: 59vh;
	min-height: 59vh;
	overflow-y: auto;
	margin-top: 2rem;
	&:-webkit-scrollbar {
		color: blue
	}
	@media screen and (max-width: 800px) {
		border-radius: 0;
	}
`

export const Label = styled.label`
	font-size: 20px;
	margin-right: 10px;
	color: white;
	font-weight: 500;
	@media screen and (max-width: 760px) {
		font-size: 16px;
	}
	@media screen and (max-width: 500px) {
		margin-left: 1rem;
	}
`

export const DevBtn = styled.button`
	color: #6e8614;
	background-color: #ffffff;
	padding: 5px 10px 5px 10px;
	border: none;
	border-radius: 1rem;
	font-weight: 600;
	cursor: pointer;
	@media screen and (max-width: 500px) {
		margin-left: 1rem;
	}
	&:hover {
		background-color: #6e8614;
		color: #ffffff;
	}
	:disabled {
		cursor: not-allowed;
	}
`
