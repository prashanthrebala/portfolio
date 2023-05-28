import { useEffect, useRef, useState } from "react";
import { Grid, Typography, Paper, Divider } from "@mui/material";
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
			sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#f0f0f0" }}
			direction={"column"}
			gap={1}
		>
			<Typography textAlign={"center"} fontFamily={"Nunito"} fontSize={"4rem"}>
				Skills
			</Typography>
			<Grid
				container
				direction={{ xs: "column-reverse", md: "row" }}
				justifyContent={"space-evenly"}
			>
				<Grid
					item
					ref={masonryRef}
					margin={3}
					padding={1}
					xs={10}
					md={4}
					sx={{
						maxHeight: "70vh",
						overflow: "hidden",
					}}
					display={"flex"}
					justifyContent={"center"}
				>
					<Masonry columns={3} spacing={3}>
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
				</Grid>
				<Grid item xs={10} md={4}>
					<Masonry columns={2} spacing={3}>
						{skills.categories.map((skill, index) => (
							<Paper>
								<Typography
									variant="body1"
									textAlign={"center"}
									fontSize={"1.2rem"}
									p={1}
								>
									{skill.title}
								</Typography>
								<Divider />
								{skill.items.map((item, idx) => (
									<Typography key={idx} textAlign={"center"}>
										{item}
									</Typography>
								))}
							</Paper>
						))}
					</Masonry>
				</Grid>
			</Grid>
			;
		</Grid>
	);
};
