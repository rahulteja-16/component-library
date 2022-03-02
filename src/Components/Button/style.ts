import styled from 'styled-components'

export const ButtonWrapper = styled.button`
	color: var(--btn-text-color, #e8a255);
	background-color: transparent;
	border: 1px solid var(--btn-border-color, #e8a255);
	border-radius: var(--border-radius);
	padding: 0.75rem 1rem;
	font-family: var(--font-mono);
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	transition: var(--transition);
	margin-left: 15px;
	font-size: var(--fs-xs);
	letter-spacing: 0.5px;

	&:hover {
		background-color: var(--orange-tint);
	}
`
