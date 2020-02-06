import React from "react";
import PropTypes from "prop-types";

export function Card1(props) {
	return (
		<div
			className="card-deck d-flex justify-content-around"
			style={{ width: "400px" }}>
			<div className="card">
				<img
					className="card-img-top"
					src={props.img}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href={props.imgUrl} className={props.btnclr}>
						Listen Now!
					</a>
				</div>
			</div>
		</div>
	);
}

Card1.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	img: PropTypes.string,
	text: PropTypes.string,
	btnclr: PropTypes.string
};
