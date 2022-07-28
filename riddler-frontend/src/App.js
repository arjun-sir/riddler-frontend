import door from "./door.jpg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Riddler 2022</h1>
			<div className="doors">
				<img src={door} alt="XD" className="door-1" />
				<img src={door} alt="XD" className="door-2" />
				<img src={door} alt="XD" className="door-3" />
				<img src={door} alt="XD" className="door-4" />
			</div>
		</div>
	);
}

export default App;
