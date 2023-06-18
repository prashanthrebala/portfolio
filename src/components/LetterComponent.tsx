import React, { useState, useEffect } from "react";

export const LetterComponent = ({ letter, animationDuration }: any) => {
	const [opacity, setOpacity] = useState(0);
	// const [color, setColor] = useState("#eeeeee");
	useEffect(() => {
		const fadeIn = () => {
			setOpacity(1);
		};

		const timeoutId = setTimeout(fadeIn, animationDuration);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [animationDuration]);

	return (
		<span
			style={{
				display: "unset",
				opacity,
				transition: "opacity 0.7s, color 0.1s",
				// color,
				// cursor: "pointer",
			}}
			// onMouseEnter={() => {
			// 	setColor("#297EA6");
			// }}
			// onMouseLeave={() => {
			// 	setColor("#eeeeee");
			// }}
		>
			{letter}
		</span>
	);
};
