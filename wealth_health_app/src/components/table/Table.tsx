import {
	createColumnHelper,
	getCoreRowModel,
	useReactTable,
	flexRender,
	SortingState,
	getSortedRowModel,
	getPaginationRowModel
} from "@tanstack/react-table"

import { useMemo, useState } from "react"

import Employee from "../../models/Employee"

import colorRow from "../../utils/colorRow"

import {
	Table,
	ColumnRow,
	Button,
	ProgressPage,
	LabelPage,
	InputPage,
	Cell,
	Column,
	SelectPage
} from "./tableStyle"

function CustomTable(props: { employees: Employee[] }) {
	const { employees } = props

	const columnHelper = createColumnHelper<Employee>()

	const columns = useMemo(
		() => [
			columnHelper.accessor("firstName", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("lastName", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("startDate", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("birthday", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("department", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("state", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("city", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("zipCode", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			}),
			columnHelper.accessor("street", {
				cell: (info) => info.getValue(),
				footer: (info) => info.column.id
			})
		],
		[]
	)

	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data: employees,
		columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: false
	})

	return (
		<>
			<div>
				<Table>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<ColumnRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<Column key={header.id}>
										{header.isPlaceholder ? null : (
											<div
												{...{
													onClick: header.column.getToggleSortingHandler()
												}}
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
												{{
													asc: " 🔼",
													desc: " 🔽"
												}[header.column.getIsSorted() as string] ?? null}
											</div>
										)}
									</Column>
								))}
							</ColumnRow>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr style={colorRow()} key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<Cell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</Cell>
								))}
							</tr>
						))}
					</tbody>
				</Table>
				<div />
				<div>
					<Button
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						{"<<"}
					</Button>
					<Button
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						{"<"}
					</Button>
					<Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
						{">"}
					</Button>
					<Button
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						{">>"}
					</Button>
					<span>
						<ProgressPage>
							Page{" "}
							<strong>
								{" "}
								{table.getState().pagination.pageIndex + 1} of{" "}
								{table.getPageCount()}
							</strong>
						</ProgressPage>
					</span>
					<LabelPage htmlFor="pageNumberInput">Go to page:</LabelPage>
					<InputPage
						type="number"
						id="pageNumberInput"
						defaultValue={table.getState().pagination.pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0
							table.setPageIndex(page)
						}}
					/>
					<SelectPage
						value={table.getState().pagination.pageSize}
						onChange={(e) => {
							table.setPageSize(Number(e.target.value))
						}}
					>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show <strong>{pageSize}</strong> employees
							</option>
						))}
					</SelectPage>
				</div>
			</div>
		</>
	)
}

export default CustomTable
