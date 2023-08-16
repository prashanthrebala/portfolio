import { useEffect, useState } from "react";
import { ProjectItem } from "../ProjectItem";
import { Box, Typography, Grid } from "@mui/material";
import background from "../../assets/backgrounds/illusia-bg-2.jpg";
import ProjectLinks from "../ProjectLinks";
import { illusia_posts } from "../../data/illusia";

export const Illusia = () => {
	const [postIndex, setPostIndex] = useState(0);
	useEffect(() => {
		const timerId = setInterval(() => {
			setPostIndex((prevIndex) => (prevIndex + 1) % illusia_posts.length);
		}, 5000);

		return () => clearInterval(timerId);
	}, []);
	return (
		<ProjectItem
			backgroundImage={`url(${background})`}
			backgroundSize={"cover"}
			backgroundPosition={"top"}
			backgroundColor={"#E74C3C"}
		>
			<Grid
				container
				sx={{ display: "flex", height: "100%", alignItems: "center" }}
			>
				<Grid item md={6} xs={12}>
					<Box
						display={"flex"}
						flexDirection={{ xs: "column" }}
						justifyContent={"center"}
						alignItems={"center"}
						color={"#F2F2F2"}
					>
						<Typography
							fontFamily={"Bubblegum Sans"}
							fontWeight={400}
							letterSpacing={2}
							fontSize={{ xs: "1.6em", sm: "2.4em", md: "1.2em", lg: "2em" }}
						>
							illusia
						</Typography>
						<Typography
							variant="body2"
							textAlign={"center"}
							marginY={1}
							paddingX={2}
							fontSize={{ xs: "1em", md: "0.8em", lg: "0.9em" }}
						>
							Create your own images from prompts with the help of OpenAI's
							image generation API
						</Typography>
						<ProjectLinks
							githubLink={
								"https://github.com/prashanthrebala/Just-Breathe-Fall-2022"
							}
							youtubeLink={"https://www.youtube.com/watch?v=v_tUXH6Hyg4"}
						/>
					</Box>
				</Grid>
				<Grid
					container
					item
					xs={0}
					md={6}
					sx={{ height: "100%", display: "flex", alignItems: "center" }}
				>
					<Grid item xs={6} p={1}>
						<Box
							sx={{
								backgroundImage: `url(${illusia_posts[postIndex]["url"]})`,
								backgroundPosition: "center",
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								aspectRatio: "1",
								borderRadius: "0.9rem",
							}}
						/>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{
							color: "#dedede",
							lineHeight: "1.5rem",
							fontSize: "0.9rem",
							display: "flex",
							textAlign: "center",
							alignItems: "center",
							paddingX: "1rem",
						}}
					>
						{illusia_posts[postIndex]["description"]}
					</Grid>
				</Grid>
			</Grid>
		</ProjectItem>
	);
};
