import { ProjectItem } from "../ProjectItem";
import { Box, Typography } from "@mui/material";
import background from "../../assets/backgrounds/handjutsu.png";
import ProjectLinks from "../ProjectLinks";

export const HandJutsu = () => {
	return (
		<ProjectItem
			backgroundImage={`url(${background})`}
			backgroundSize={"cover"}
			backgroundPosition={"center"}
			backgroundColor={"#E67E22"}
		>
			<Box
				display={"flex"}
				flexDirection={{ xs: "column" }}
				justifyContent={"center"}
				alignItems={"center"}
				color={"#DFDFDF"}
			>
				<Typography
					fontFamily={"Ninja Naruto"}
					sx={{
						textShadow:
							"-1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black",
					}}
					fontSize={{ xs: "1.8em", sm: "2.4em", md: "1.6em", lg: "2.4em" }}
				>
					Hand Jutsu
				</Typography>
				<Typography
					variant="body2"
					textAlign={"center"}
					marginY={1}
					paddingX={2}
					fontSize={{ xs: "1em", md: "0.8em", lg: "0.9em" }}
					sx={{ textShadow: "0.1em 0.1em 2em black" }}
				>
					Deep learning project facilitating sign language communication through
					text conversion.
				</Typography>
				<ProjectLinks
					githubLink={"https://github.com/prashanthrebala/HandJutsu"}
					paperLink={
						"https://drive.google.com/file/d/1RAVn4hp5txUHPJxbaL4Il94IS16Dhbku/view"
					}
				/>
			</Box>
		</ProjectItem>
	);
};
