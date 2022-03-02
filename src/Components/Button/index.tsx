import { ButtonWrapper } from './style'

interface ButtonType {
	children: React.ReactNode
	onBtnClick?: React.MouseEventHandler<HTMLButtonElement>
	bgColor?: string
}

const Button = ({ children, onBtnClick }: ButtonType) => {
	return (
		<ButtonWrapper type="button" onClick={onBtnClick}>
			{children}
		</ButtonWrapper>
	)
}

export default Button
