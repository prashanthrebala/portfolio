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
		targetLink,
	} = props;
	const theme = useTheme();

	return (
		<Link
			href={targetLink}
			target="_blank"
			rel="noopener noreferrer"
			underline="none"
			color="inherit"
		>
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
					minHeight: { xs: "20vh", md: "auto" },
					overflow: "hidden",
					position: "relative",
					boxSizing: "border-box",
					transition: "transform 0.3s",
					transitionDelay: "0.1s",
					[theme.breakpoints.up("md")]: {
						"&:hover": {
							transform: "scale(1.05)",
						},
					},
					cursor: "pointer",
				}}
			>
				{/* <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
					<IoMdMore color="#DFDFDF" />
				</IconButton> */}
				{children}
			</Paper>
		</Link>
	);
};
