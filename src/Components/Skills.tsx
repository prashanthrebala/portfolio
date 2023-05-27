import { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { SkillMasonryItem } from "./SkillMasonryItem";
import { skills } from "../Content/skills";

const tripleArray = (arr: any) => [...arr, ...arr, ...arr];

export const Skills = () => {
	const masonryRef = useRef(null);
	const [scrollDistance, setScrollDistance] = useState(2);
	useEffect(() => {
		const masonryScroller: any = masonryRef.current;
		const animateScroll = () => {
			if (masonryScroller) {
				if (scrollDistance < 0) {
					if (masonryScroller.scrollTop + scrollDistance <= 0) {
						setTimeout(() => setScrollDistance(2), 1000);
					}
				} else {
					if (
						masonryScroller.scrollTop + scrollDistance >
						masonryScroller.scrollHeight - masonryScroller.clientHeight
					) {
						setTimeout(() => setScrollDistance(-1), 1000);
					}
				}
				masonryScroller.scrollTop += scrollDistance;
			}
		};

		const timer = setInterval(animateScroll, 1000 / 30);

		return () => clearInterval(timer);
	}, [scrollDistance]);

	return (
		<Grid
			container
			sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#fffff" }}
			direction={"column"}
			gap={1}
		>
			<Typography textAlign={"center"} fontFamily={"Nunito"} fontSize={"4rem"}>
				Skills
			</Typography>
			<Box
				ref={masonryRef}
				margin={3}
				padding={1}
				sx={{
					width: { xs: "90vw", md: "30vw" },
					maxHeight: "70vh",
					overflow: "hidden",
				}}
				display={"flex"}
				justifyContent={"center"}
			>
				<Masonry columns={3} spacing={3} sx={{ xs: "90vw", md: "30vw" }}>
					{tripleArray(skills.skillSet).map((skill, index) => (
						<SkillMasonryItem
							name={skill["name"]}
							icon={skill["icon"]}
							height={skill["height"]}
							index={index}
							key={index}
						/>
					))}
				</Masonry>
			</Box>
			;
		</Grid>
	);
};
