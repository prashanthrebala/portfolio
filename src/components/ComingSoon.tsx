import { Divider, Grid, Zoom, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { ImBooks } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ComingSoon = () => {
	const { ref, inView } = useInView({ threshold: 0.8, triggerOnce: true });
	const theme = useTheme();
	const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Grid
			ref={ref}
			container
			sx={{
				minHeight: "100vh",
				backgroundColor: "#150026",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				color: "#DFDFDF",
				overflow: "hidden",
			}}
		>
			<Typography
				sx={{
					backgroundColor: "#150026",
					fontSize: { xs: "3em", md: "5em" },
					fontWeight: 300,
				}}
			>
				Coming Soon
			</Typography>
			<Divider
				sx={{
					width: "80%",
					borderColor: "white",
					marginY: "1.5em",
				}}
			/>
			<Grid
				container
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<ComingSoonGridItem inView={inView}>
					<ImBooks size={mediumScreen ? 120 : 80} />
					Education
				</ComingSoonGridItem>
				<ComingSoonGridItem inView={inView}>
					<IoLogoInstagram size={mediumScreen ? 120 : 80} />
					Instagram
				</ComingSoonGridItem>
				<ComingSoonGridItem inView={inView}>
					<BsYoutube size={mediumScreen ? 120 : 80} />
					YouTube
				</ComingSoonGridItem>
				<ComingSoonGridItem inView={inView}>
					<CiCircleMore size={mediumScreen ? 120 : 80} />
					Other
				</ComingSoonGridItem>
			</Grid>
		</Grid>
	);
};

interface ComingSoonGridItemProps {
	children: React.ReactNode;
	inView: boolean;
}

const ComingSoonGridItem = ({ children, inView }: ComingSoonGridItemProps) => {
	return (
		<Zoom in={inView} timeout={1000}>
			<Grid
				container
				item
				xs={5}
				md={2.5}
				display={"flex"}
				justifyContent={"center"}
				direction={"column"}
				alignItems={"center"}
				fontSize={{ xs: "1.3em", md: "2em" }}
				fontFamily={"Roboto"}
				fontWeight={300}
				gap={1}
				marginY={2}
			>
				{children}
			</Grid>
		</Zoom>
	);
};
