import React from "react";
import "../Navigation/navigation.component.css";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
	return (
		<div className="navigation">
			<Link className="home-btn-div" to="/">
				<button className="home-btn">HOME</button>
			</Link>
			<Outlet />
		</div>
	);
}

export default Navigation;
