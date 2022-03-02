import styled from 'styled-components'

export const DatePickerWrapper = styled.input`
	height: 30px;
	width: 200px;
	border: none;
	border-bottom: 1px solid var(--blue-60);
	color: var(--text-100);
	font-size: var(--fs-md);
	background-color: var(--bg-secondary);
	margin: 10px 10px;
	&:focus {
		outline: thin dotted;
		color: var(--blue-base);
	}
`
