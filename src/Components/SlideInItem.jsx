import React, { useState, useEffect, useRef } from "react";

export const SlideInItem = () => {
	const [isVisible, setIsVisible] = useState(false);
	const componentRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const elementTop = componentRef.current.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			if (elementTop < windowHeight) {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			ref={componentRef}
			style={{ height: "10vh" }}
			className={`slide-in-component ${isVisible ? "visible" : ""}`}
		>
			{"What's up"}
		</div>
	);
};
