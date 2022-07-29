import React from "react";
import door from "../../assets/door.jpg";
import "../Play/play.component.css";
import { Link } from "react-router-dom";

function Play() {
	return (
		<div className="play">
			<h1>Play</h1>
			<div className="doors">
				<Link className="door-1" to="/play/room">
					<img alt="door" src={door} />
				</Link>
				<Link to="/play/room">
					<img alt="door" className="door-2" src={door} />
				</Link>
				<Link className="door-3" to="/play/room">
					<img alt="door" src={door} />
				</Link>
				<Link to="/play/room">
					<img alt="door" src={door} />
				</Link>
			</div>
		</div>
	);
}

export default Play;
