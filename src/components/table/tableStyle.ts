import styled from "styled-components"

export const Button = styled.button`
	width: 40px;
	height: 40px;
	color: #6e8614;
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
	background-color: #ffffff;
	font-size: 16px;
	cursor: pointer;
	border: 1px solid #6e8614;
	:hover {
		border: 2px solid #6e8614;
		transform: scale(1.2);
	}
`
export const ProgressPage = styled.div`
	margin-bottom: 0.5rem;
`

export const InputPage = styled.input`
	height: 30px;
	border-radius: 15px;
	border: none;
	padding: 10px;
	font-size: 16px;
	font-weight: 600;
	color: #000000;
	width: 80px;
	border: 1px solid #000000;
	margin-right: 0.5rem;
`
export const LabelPage = styled.label`
	margin-right: 0.5rem;
`

export const Table = styled.table`
	margin-bottom: 1rem;
`

export const ColumnRow = styled.tr`
	color: #ffffff;
	background-color: #6e8614;
`

export const Column = styled.th`
	padding: 10px;
	text-align: left;
	cursor: pointer;
`

export const Cell = styled.td`
	padding: 10px;
`

export const SelectPage = styled.select`
	border-radius: 1rem;
	padding: 4px;
`
