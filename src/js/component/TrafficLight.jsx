import React, {useState} from "react";

//create your first component
const TrafficLight = () => {

	
	return (
		<div className="traffic-light">
			<button className="red"></button>
			<br />
			<button className="yellow"></button>
			<br />
			<button className="green"></button>
		</div>
	);
};

export default TrafficLight;
