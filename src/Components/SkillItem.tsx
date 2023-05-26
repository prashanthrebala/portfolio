import React, { useMemo } from "react";
import { Box, Typography, Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

export const SkillItem = ({ name, icon, index }: any) => {
	const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
	const time = useMemo(() => {
		return (index % (window.innerWidth >= 900 ? 5 : 2)) * 400;
	}, [index]);

	return (
		<Grow in={inView} timeout={time}>
			<Box
				ref={ref}
				flexDirection={"column"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Box
					sx={{
						background: "radial-gradient(#BFBFBF, #931C1C)",
						borderRadius: "50%",
						marginBottom: "0.4rem",
						padding: "2rem",
						height: "6rem",
						width: "6rem",
					}}
				>
					<Box
						sx={{
							height: "100%",
							width: "100%",
							backgroundImage: `url(${icon})`,
							backgroundPosition: "center",
							backgroundOrigin: "content-box",
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
						}}
					/>
				</Box>
				<Typography>{name}</Typography>
			</Box>
		</Grow>
	);
};
