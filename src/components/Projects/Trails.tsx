import { useContext } from "react";
import { ProjectItem } from "../ProjectItem";
import { Box, Typography } from "@mui/material";
import background from "../../assets/backgrounds/trails.jpg";
import ProjectLinks from "../ProjectLinks";
import { BreakpointsContext } from "../../contexts/BreakpointsContext";

export const Trails = () => {
	const { mdScreen, lgScreen } = useContext(BreakpointsContext);
	return (
		<ProjectItem
			backgroundImage={"radial-gradient(#03A64A, #025940)"}
			backgroundSize={"cover"}
			backgroundPosition={"top"}
			backgroundColor={"#03A64A"}
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
					textAlign={"center"}
					fontWeight={700}
					lineHeight={"1.15em"}
					paddingX={2}
					fontSize={{ xs: "1.6em", sm: "2.4em", md: "2.25em", lg: "3em" }}
				>
					Trails
				</Typography>
				<Typography variant="body2">(Work in progress)</Typography>
				<Typography
					variant="body2"
					textAlign={{ xs: "center", md: "justify" }}
					marginY={1}
					paddingX={{ xs: 2, md: 3 }}
					lineHeight={{ md: 1.5, lg: 1.75 }}
					fontSize={{ xs: "1em", md: "0.8em", lg: "0.9em" }}
					// sx={{ textShadow: "0.1em 0.1em 0.2em black" }}
				>
					{mdScreen
						? `Built with NextJS 13, Trails is a social platform for discovering global tourist attractions and exploring fellow travelers' posts. Share your own experiences with the community!`
						: `Trails is a social platform to discover and share popular tourist attractions from your travel diaries!`}
				</Typography>
				<ProjectLinks
					iconSize={lgScreen ? 35 : undefined}
					githubLink={"https://github.com/prashanthrebala/trails"}
				/>
			</Box>
		</ProjectItem>
	);
};
