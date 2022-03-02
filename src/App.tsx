import Button from './Components/Button'
import './styles.css'

const App = () => {
	return (
		<>
			<h1>React Boiler Plate</h1>
			<Button onBtnClick={() => console.log('working')}>Test</Button>
		</>
	)
}

export default App
