import { ButtonType } from './buttonType'
import { ButtonWrapper } from './style'

const Button = ({ children, onBtnClick }: ButtonType) => {
	return (
		<ButtonWrapper type="button" onClick={onBtnClick}>
			{children}
		</ButtonWrapper>
	)
}

export default Button
