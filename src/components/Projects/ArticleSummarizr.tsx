import { ProjectItem } from "../ProjectItem";
import { Box, Typography, Grid } from "@mui/material";
// import { AiOutlineGithub, AiFillYoutube } from "react-icons/ai";

import background from "../../assets/backgrounds/summarizr.png";

export const ArticleSummarizr = () => {
	return (
		<ProjectItem
			backgroundImage={`url(${background})`}
			backgroundSize={"cover"}
			backgroundPosition={"top"}
			backgroundColor={"#9b59b6"}
			targetLink="https://summarizr.rusherrg.tech/"
		>
			<Box
				display={"flex"}
				flexDirection={{ xs: "column" }}
				justifyContent={"center"}
				alignItems={"center"}
				color={"#F2F2F2"}
			>
				<Typography
					fontFamily={"Passion One"}
					fontWeight={700}
					fontSize={{ xs: "1.6em", sm: "2.4em", md: "1.2em", lg: "2em" }}
				>
					Article Summarizr
				</Typography>
				<Typography
					variant="body2"
					textAlign={"center"}
					marginY={1}
					paddingX={2}
					fontSize={{ xs: "1em", md: "0.8em", lg: "0.9em" }}
					sx={{ textShadow: "0.1em 0.1em 0.2em black" }}
				>
					This website utilizes RapidAPI to extract and summarize article
					content using GPT.
				</Typography>
				{/* <Grid
					container
					display={{ xs: "none", md: "flex" }}
					justifyContent={"center"}
					gap={2}
				>
					<Grid item>
						<AiOutlineGithub size={30} />
					</Grid>
					<Grid item>
						<AiFillYoutube size={30} color="#5A5A5A" />
					</Grid>
				</Grid> */}
			</Box>
		</ProjectItem>
	);
};
