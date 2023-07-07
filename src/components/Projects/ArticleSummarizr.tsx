import { ProjectItem } from "../ProjectItem";
import { Box, Typography } from "@mui/material";
import background from "../../assets/backgrounds/summarizr.png";
import ProjectLinks from "../ProjectLinks";

export const ArticleSummarizr = () => {
	return (
		<ProjectItem
			backgroundImage={`url(${background})`}
			backgroundSize={"cover"}
			backgroundPosition={"top"}
			backgroundColor={"#9b59b6"}
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
				<ProjectLinks
					liveSiteLink={"https://summarizr.rusherrg.tech/"}
					githubLink={"https://github.com/prashanthrebala/Article-Summarizr"}
				/>
			</Box>
		</ProjectItem>
	);
};
