import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/routes/Home/home.component";
import Play from "../src/routes/Play/play.component";
import Riddle from "../src/routes/Riddle/riddle.component";
import Room from "../src/routes/Room/room.component";
import Navigation from "./routes/Navigation/navigation.component";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="play">
						<Route index element={<Play />} />
						<Route path="room" element={<Room />} />
						<Route path="riddle" element={<Riddle />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
