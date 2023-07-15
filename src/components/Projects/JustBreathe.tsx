import { ProjectItem } from "../ProjectItem";
import { Box, Typography } from "@mui/material";
import ProjectLinks from "../ProjectLinks";

export const JustBreathe = () => {
	return (
		<ProjectItem
			backgroundSize={"cover"}
			backgroundPosition={"top"}
			backgroundImage={"radial-gradient(#1B9CFC, #182C61)"}
		>
			<Box
				display={"flex"}
				flexDirection={{ xs: "column" }}
				justifyContent={"center"}
				alignItems={"center"}
				color={"#F2F2F2"}
			>
				<Typography
					fontFamily={"Segoe Script"}
					fontWeight={600}
					fontSize={{ xs: "1.6em", sm: "2.4em", md: "1.2em", lg: "2em" }}
				>
					Just Breathe
				</Typography>
				<Typography
					variant="body2"
					textAlign={"center"}
					marginY={1}
					paddingX={2}
					fontSize={{ xs: "1em", md: "0.8em", lg: "0.9em" }}
				>
					An embedded system utilizing a pressure sensor to monitor and alert if
					a baby's breathing stops.
				</Typography>
				<ProjectLinks
					githubLink={
						"https://github.com/prashanthrebala/Just-Breathe-Fall-2022"
					}
					youtubeLink={"https://www.youtube.com/watch?v=v_tUXH6Hyg4"}
				/>
			</Box>
		</ProjectItem>
	);
};
