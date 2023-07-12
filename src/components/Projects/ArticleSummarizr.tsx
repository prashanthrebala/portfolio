import { useContext } from "react";
import { ProjectItem } from "../ProjectItem";
import { Box, Typography } from "@mui/material";
import background from "../../assets/backgrounds/summarizr.png";
import ProjectLinks from "../ProjectLinks";
import { BreakpointsContext } from "../../contexts/BreakpointsContext";

export const ArticleSummarizr = () => {
	const { mdScreen, lgScreen } = useContext(BreakpointsContext);
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
				gap={{ lg: 2 }}
			>
				<Typography
					fontFamily={"Passion One"}
					textAlign={"center"}
					fontWeight={700}
					lineHeight={"1.15em"}
					paddingX={2}
					fontSize={{ xs: "1.6em", sm: "2.4em", md: "2.25em", lg: "3em" }}
				>
					Article Summarizr
				</Typography>
				<Typography
					variant="body2"
					textAlign={{ xs: "center", md: "justify" }}
					marginY={1}
					paddingX={{ xs: 2, md: 3 }}
					lineHeight={{ md: 1.5, lg: 1.75 }}
					fontSize={{ xs: "1em", md: "0.8em", lg: "0.9em" }}
					sx={{ textShadow: "0.1em 0.1em 0.2em black" }}
				>
					{mdScreen
						? `The Article Summarizr web app simplifies article summarization. Powered by the Article Extractor and Summarizer RapidAPI, it allows you to effortlessly summarize articles by pasting the content or document link on the website, providing a concise summary within a minute.`
						: `This website utilizes RapidAPI to extract and summarize article content using GPT.`}
				</Typography>
				<ProjectLinks
					iconSize={lgScreen ? 35 : undefined}
					liveSiteLink={"https://summarizr.rusherrg.tech/"}
					githubLink={"https://github.com/prashanthrebala/Article-Summarizr"}
				/>
			</Box>
		</ProjectItem>
	);
};
