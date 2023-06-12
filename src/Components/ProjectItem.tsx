import { Paper, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const ProjectItem = (props: any) => {
	const { backgroundColor, children, targetLink } = props;
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
				sx={{
					height: "100%",
					backgroundColor,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: { xs: "20vh", md: "auto" },
					overflow: "hidden",
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
				{children}
			</Paper>
		</Link>
	);
};
