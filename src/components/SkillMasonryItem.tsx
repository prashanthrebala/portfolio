import { SkillMasonryItemProps } from "../interfaces/interfaces";
import { Box, Paper, Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

export const SkillMasonryItem = ({ icon, height }: SkillMasonryItemProps) => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	return (
		<Paper
			sx={{ backgroundColor: "#AFD3E2", padding: "0.2rem" }}
			elevation={1}
			ref={ref}
		>
			<Grow in={inView} timeout={1000}>
				<Box
					sx={{
						height,
						paddingY: "1rem",
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
