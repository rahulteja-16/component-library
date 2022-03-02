import { DatePickerType } from './customDatePickerType'
import { DatePickerWrapper } from './styles'

const CustomDatePicker = ({ date, onUpdateDate }: DatePickerType) => {
	return (
		// <DatePicker
		// 	selected={new Date(date)}
		// 	onChange={(date) => console.log(date)}
		// />
		<DatePickerWrapper
			type="date"
			value={date}
			onChange={onUpdateDate}
			max={date}
			data-testid="date"
		/>
	)
}

export default CustomDatePicker
