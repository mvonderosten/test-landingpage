import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
			<a className="navbar-brand text-rgba(250, 88, 204, 1.0)" href="#">
				Summer Breeze
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a
						className="nav-item nav-link"
						href="http://www.joltradio.org/">
						Live Stream
					</a>
					<a
						className="nav-item nav-link"
						href="https://www.mixcloud.com/maaaakymaaaak/">
						Archive
					</a>
					<a
						className="nav-item nav-link"
						href="https://www.joltradio.org/artist/summer-breeze/">
						About
					</a>
				</div>
			</div>
		</nav>
	);
}
