import { Box, Paper, Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

export const SkillMasonryItem = ({ icon, height }: any) => {
	const { ref, inView } = useInView({ threshold: 0.6 });
	return (
		<Paper
			sx={{ backgroundColor: "rgba(0, 0, 0, 0)", padding: "0.2rem" }}
			elevation={1}
			ref={ref}
		>
			<Grow in={inView} timeout={1000}>
				<Box
					sx={{
						height,
						backgroundImage: `url(${icon})`,
						backgroundPosition: "center",
						backgroundOrigin: "content-box",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
					}}
				/>
			</Grow>
		</Paper>
	);
};
