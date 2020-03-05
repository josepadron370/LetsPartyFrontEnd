import React from "react";
import Partay from "../../img/Partay.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Party App!</h1>
		<p>
			<img src={Partay} />
		</p>
		<a href="#" className="btn btn-primary">
			Login
		</a>
		<br />
		<br />
		<a href="#" className="btn btn-success">
			Sign Up
		</a>
	</div>
);
