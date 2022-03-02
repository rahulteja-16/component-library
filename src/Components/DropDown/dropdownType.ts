export interface Country {
	id: number
	code: string
	name: string
	active: boolean
}

export interface DropDownType {
	items: Country[]
	defaultText: string
	onSelect?: React.ChangeEventHandler<HTMLSelectElement>
	keyValue?: string
	selectedValue?: string
	label?: string
}
