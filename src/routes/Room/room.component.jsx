import React from "react";
import room from "../../assets/gameroom_1.jpg";
import { Link } from "react-router-dom";
import roomOverlay from "../../assets/gameroom_1_cropped.jpg";
import "../Room/room.component.css";

function Room() {
	return (
		<div className="room">
			<h1>Room</h1>
			<div className="images">
				<img className="room-img" alt="room" src={room} />
				<Link to="/play/riddle">
					<img
						className="room-overlay"
						src={roomOverlay}
						alt="roomOverlay"
					/>
				</Link>
			</div>
		</div>
	);
}

export default Room;
