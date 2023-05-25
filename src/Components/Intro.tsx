import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";
import { LetterComponent } from "./LetterComponent";
import prashanth_rebala from "../Assets/prashanth_rebala.jpg";
import { ParticleBackground } from "./ParticleBackground";

export const Intro = () => {
	const [showParticles, setShowParticles] = React.useState(false);
	const [backgroundColor, setBackgroundColor] = React.useState("#001829");
	const [opacity, setOpacity] = React.useState(0);

	React.useEffect(() => {
		const timer1 = setTimeout(() => {
			setOpacity(1);
		}, 500);
		const timer2 = setTimeout(() => {
			setBackgroundColor("rgba(0, 24, 41, 0)");
		}, 1000);
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);

	React.useEffect(() => {
		setShowParticles(true);
	}, [backgroundColor]);

	return (
		<Stack
			sx={{
				color: "#eee",
				backgroundColor,
				transition: "background-color 0.7s",
			}}
			direction={{ xs: "column", md: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
			gap={3}
			minHeight="100vh"
			position={"relative"}
		>
			{showParticles && <ParticleBackground />}
			<Avatar src={prashanth_rebala} sx={{ width: "16rem", height: "16rem" }} />
			<Stack margin={1}>
				<Typography variant="h5" sx={{ opacity, transition: "opacity 0.5s" }}>
					Hi! I'm
				</Typography>
				<Typography
					sx={{ fontWeight: "bold", fontSize: { md: "3rem", xs: "2rem" } }}
				>
					{"Prashanth Rebala".split("").map((letter, idx) => (
						<LetterComponent
							letter={letter}
							animationDuration={700 + 40 * idx}
						/>
					))}
				</Typography>
			</Stack>
		</Stack>
	);
};
