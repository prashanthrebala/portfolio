import React from "react";
import { Avatar, Typography, Stack, Grid, Divider } from "@mui/material";
import { LetterComponent } from "./LetterComponent";
import prashanth_rebala from "../assets/prashanth_rebala.jpg";
import { ParticleBackground } from "./ParticleBackground";

export const Intro = () => {
	const [showParticles, setShowParticles] = React.useState(false);
	const [backgroundColor, setBackgroundColor] = React.useState("#150026");
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
		<Grid
			container
			sx={{
				color: "#eee",
				backgroundColor,
				transition: "background-color 0.7s",
			}}
			display={"flex"}
			direction={{ xs: "column", md: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
			gap={3}
			minHeight="100vh"
			position={"relative"}
		>
			{showParticles && <ParticleBackground />}
			<Avatar src={prashanth_rebala} sx={{ width: "16rem", height: "16rem" }} />
			{/* Change the grid width to md={3} when adding 'about' section */}
			<Grid item margin={1} xs={10} md={5}>
				<Typography
					variant="h5"
					sx={{
						opacity,
						transition: "opacity 0.5s",
						textAlign: { xs: "center", md: "left" },
					}}
				>
					Hi! I'm
				</Typography>
				<Typography
					sx={{
						fontSize: { md: "4em", xs: "3em" },
						fontFamily: "Lato",
						textAlign: { xs: "center", md: "left" },
					}}
				>
					{"Prashanth Rebala".split("").map((letter, idx) => (
						<LetterComponent
							letter={letter}
							animationDuration={700 + 40 * idx}
						/>
					))}
				</Typography>
			</Grid>
			{/* <Grid container item md={3}>
				<Grid container item display={"flex"} alignItems={"center"}>
					<Grid item xs={2}>
						<Typography
							sx={{
								fontFamily: "Arial",
								fontSize: "4rem",
								textAlign: "center",
								paddingTop: "1rem",
								marginBottom: "-1rem",
							}}
						>
							“
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Divider
							textAlign="left"
							sx={{ borderColor: "white", borderBottomWidth: "1px" }}
						/>
					</Grid>
				</Grid>

				<Typography sx={{ padding: "0 4em" }}>
					Passionate full-stack developer specializing in web and software
					development, constantly pushing boundaries and creating innovative
					solutions.
				</Typography>
				<Grid
					container
					item
					display={"flex"}
					justifyContent={"flex-end"}
					alignItems={"center"}
				>
					<Grid item xs={6}>
						<Divider
							textAlign="left"
							sx={{ borderColor: "white", borderBottomWidth: "1px" }}
						/>
					</Grid>
					<Grid item xs={2}>
						<Typography
							sx={{
								fontFamily: "Arial",
								fontSize: "4rem",
								textAlign: "center",
								paddingTop: "1rem",
								marginBottom: "-1rem",
							}}
						>
							”
						</Typography>
					</Grid>
				</Grid>
			</Grid> */}
		</Grid>
	);
};
