import { useEffect, useState } from "react";
import { ProjectItem } from "../ProjectItem";
import { Box, Typography, Grid, Fade } from "@mui/material";
import background from "../../assets/backgrounds/illusia-bg-2.jpg";
import ProjectLinks from "../ProjectLinks";
import { illusia_posts } from "../../data/illusia";

export const Illusia = () => {
	const [postIndex, setPostIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		if (isVisible) {
			setTimeout(() => {
				setIsVisible(false);
			}, 6500);
		} else {
			setTimeout(() => {
				setIsVisible(true);
				setPostIndex((postIndex + 1) % illusia_posts.length);
			}, 300);
		}
	}, [isVisible]);
	return (
		<ProjectItem
			backgroundImage={`url(${background})`}
			backgroundSize={"200%"}
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
							fontSize={{ xs: "1.6em", sm: "2.4em", md: "1.2em", lg: "2.4em" }}
							sx={{
								textShadow: "0.1rem 0.1rem 0.5rem black",
							}}
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
							githubLink={"https://github.com/prashanthrebala/Illusia"}
						/>
					</Box>
				</Grid>
				<Grid
					container
					item
					md={6}
					sx={{
						height: "100%",
						display: { xs: "none", md: "flex" },
						alignItems: "center",
						opacity: isVisible ? 1 : 0, // Apply opacity based on visibility
						transition: "opacity 0.3s ease-in-out", // Add a transition effect
					}}
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
							alignItems: "center",
							paddingX: "1rem",
						}}
					>
						<Typography
							variant="body2"
							textAlign={"center"}
							marginY={1}
							fontSize={{ xs: "1em", md: "0.8em", lg: "0.9em" }}
							sx={{
								backgroundColor: "#000000cc",
								padding: "0.1rem",
							}}
						>
							{illusia_posts[postIndex]["description"]}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</ProjectItem>
	);
};
