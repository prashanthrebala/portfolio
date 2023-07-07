import { ProjectItemProps } from "../interfaces/interfaces";
import { Paper, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import { IoMdMore } from "react-icons/io";

export const ProjectItem = (props: ProjectItemProps) => {
	const {
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		children,
	} = props;
	const theme = useTheme();

	return (
		<Paper
			elevation={12}
			sx={{
				height: "100%",
				...(backgroundImage && {
					backgroundImage,
					backgroundSize,
					backgroundPosition,
				}),
				backgroundColor,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				// safe to freely increase xs value
				minHeight: { xs: "28vh", md: "auto" },
				overflow: "hidden",
				position: "relative",
				boxSizing: "border-box",
				transition: "transform 0.3s",
				transitionDelay: "0s",
				[theme.breakpoints.up("md")]: {
					"&:hover": {
						transform: "scale(1.05)",
						transitionDelay: "0.5s",
					},
				},
			}}
		>
			{/* <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
				<IoMdMore color="#DFDFDF" />
			</IconButton> */}
			{children}
		</Paper>
	);
};
