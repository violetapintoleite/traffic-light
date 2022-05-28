import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [redLight, setRedLight] = useState(false);
	const [yellowLight, setYellowLight] = useState(false);
	const [greenLight, setGreenLight] = useState(false);

	const toggleRed = () => {
		setRedLight(true);
		setYellowLight(false);
		setGreenLight(false);
	};
	const toggleYellow = () => {
		setYellowLight(true);
		setRedLight(false);
		setGreenLight(false);
	};
	const toggleGreen = () => {
		setGreenLight(true);
		setRedLight(false);
		setYellowLight(false);
	};

	return (
		<div className="traffic-light">
			<button
				id="red"
				className={redLight ? "glow" : null}
				onClick={toggleRed}></button>
			<br />
			<button
				id="yellow"
				className={yellowLight ? "glow" : null}
				onClick={toggleYellow}></button>
			<br />
			<button
				id="green"
				className={greenLight ? "glow" : null}
				onClick={toggleGreen}></button>
		</div>
	);
};

export default TrafficLight;
