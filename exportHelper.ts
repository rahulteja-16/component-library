const BASE_PATH = './src/Components'

const getExposedComp = () => {
	return {
		'./Button': `${BASE_PATH}/Button`,
		'./DropDown': `${BASE_PATH}/DropDown`,
		'./DatePicker': `${BASE_PATH}/CustomDatePicker`,
		'./Boop': `${BASE_PATH}/Boop`,
	}
}

module.exports = {
	getExposedComp: getExposedComp,
}
