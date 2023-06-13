import { ProjectItem } from "../ProjectItem";
import { Box, Typography, Grid } from "@mui/material";
import background from "../../Assets/backgrounds/handjutsu.png";
// import { AiOutlineGithub, AiFillYoutube } from "react-icons/ai";

export const HandJutsu = () => {
	return (
		<ProjectItem
			backgroundImage={`url(${background})`}
			backgroundSize={"cover"}
			backgroundPosition={"center"}
			backgroundColor={"#E67E22"}
			targetLink="https://github.com/prashanthrebala/HandJutsu"
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
