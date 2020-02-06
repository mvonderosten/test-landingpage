import React from "react";
import Iframe from "react-iframe";

export function Card2() {
	return (
		<div className="card">
			<div className="card-body">
				<Iframe
					url="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fmaaaakymaaaak%2Fsummer-breeze-vol-5%2F"
					width="100%"
					height="200"
					className="card-body"
					frameborder="0"
				/>
			</div>
		</div>
	);
}
