import React from "react";
import "../Home/home.component.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<h1>Home</h1>
			<div className="play-now">
				<Link to="/play">
					<button>PLAY NOW</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
