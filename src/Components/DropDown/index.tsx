import { DropDownType } from './dropdownType'
import { LabelWrapper, SelectWrapper } from './styles'

const DropDown = ({
	items,
	onSelect,
	keyValue,
	selectedValue,
	label,
	defaultText,
}: DropDownType) => {
	return (
		<>
			<LabelWrapper htmlFor={keyValue}>{label}</LabelWrapper>
			<SelectWrapper
				name={keyValue}
				onChange={onSelect}
				value={selectedValue}
				data-testid={`select${label}`}
			>
				<option key="default" disabled>
					{defaultText}
				</option>
				{items.map((item) => (
					<option
						key={item.id}
						value={item.code}
						data-testid={`${label}-${item.code}`}
					>
						{item.name}
					</option>
				))}
			</SelectWrapper>
		</>
	)
}

export default DropDown
