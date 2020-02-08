import React from "react";
import Iframe from "react-iframe";
import PropTypes from "prop-types";
//import React, { usesState } from "react";

import { Footer } from "../component/footer";
import { Card1 } from "../component/card-1";
import { Card2 } from "../component/card-2";
import { Jumbotron } from "../component/jumbo";
import { Navbar } from "../component/navbar";
//import { Footer } from "./componet/footer";
//<input onChange={e => setstate(e.target.value)} />
export function Home() {
	return (
		//const [pic, setcpic] = setstate("ihttps://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/e35/72146143_702097720274834_1698325024176752920_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=daeoZ6wD0C4AX_gITi8&oh=80848adbb81dc77bf0dc133fcbcb2163&oe=5E4080C9");

		<>
			<Navbar />
			<Jumbotron />
			<div className="card-deck d-flex justify-content-around">
				<Card1
					cardlink="http://www.joltradio.org/"
					title="Listen Live"
					img="https://www.joltradio.org/wp-content/themes/jolt/images/jolt-circle-logo--12x.png"
					text="Tune in every first thursday of the month at 5 PM!"
					btnclr="bg-light"
				/>
				<Card1
					cardlink="https://www.mixcloud.com/maaaakymaaaak/"
					title="Show Archive"
					img="https://www.joltradio.org/wp-content/uploads/2019/09/sb-logo_V2@2x-350x350.jpg"
					text="Listen to past episodes"
					btnclr="bg-success"
				/>
				<Card1
					cardlink="https://www.instagram.com/maaaakymaaaak/"
					title="Instagram Feed"
					img="https://scontent-mia3-1.cdninstagram.com/v/t51.2885-15/e35/83702057_128918701946867_6469843693864294946_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=LBRYHwnzZL8AX-OA8fR&oh=10973ee34779f7cb3468e76ca08231c5&oe=5E400FD8"
					text="Check out my photography"
					btnclr="bg-danger"
				/>
			</div>
			<Card2 />
			<Footer />
		</>
	);
}
