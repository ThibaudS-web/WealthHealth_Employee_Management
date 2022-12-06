import {
	createColumnHelper,
	getCoreRowModel,
	useReactTable,
	flexRender,
	SortingState,
	getSortedRowModel
} from "@tanstack/react-table"

import { useEffect, useMemo, useState } from "react"
import Employee from "../../models/Employee"

function Table(props: { employees: Employee[] }) {
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
		debugTable: false
	})

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

export default Table
