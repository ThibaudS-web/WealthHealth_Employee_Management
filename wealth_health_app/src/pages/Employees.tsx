import useEmployeesProvider from "../context/EmployeesContext"
import {
	createColumnHelper,
	getCoreRowModel,
	useReactTable,
	flexRender,
	TableOptions,
	ColumnDef,
	ColumnDefBase,
	SortingState,
	getSortedRowModel
} from "@tanstack/react-table"
import Employee from "../models/Employee"
import { useMemo, useState } from "react"

function Employees(props: { title: string }) {
	document.title = props.title

	const { employees, addEmployee } = useEmployeesProvider()

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

	const [data, setData] = useState(employees)
	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true
	})
	console.log("employees", employees)

	return (
		<>
			<div>
				<table>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										style={{ padding: "10px", textAlign: "left" }}
										key={header.id}
									>
										{header.isPlaceholder ? null : (
											<div
												{...{
													className: header.column.getCanSort()
														? "cursor-pointer select-none"
														: "",
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
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<td style={{ padding: "10px" }} key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<div className="h-4" />
			</div>
		</>
	)
}

export default Employees
