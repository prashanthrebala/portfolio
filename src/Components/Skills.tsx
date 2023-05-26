import React from "react";
import { Grid, Typography } from "@mui/material";
import { SkillItem } from "./SkillItem";
import { skills } from "../Content/skills";

export const Skills = () => {
	return (
		<Grid
			container
			sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#931C1C" }}
			direction={"column"}
			gap={1}
		>
			<Grid item>
				<Typography
					textAlign={"center"}
					fontFamily={"Nunito"}
					fontSize={"4rem"}
				>
					Skills
				</Typography>
			</Grid>
			<Grid container item>
				{skills.skillSet.map((skill: any, idx) => (
					<Grid
						container
						item
						xs={6}
						md={2.4}
						key={idx}
						padding={"1rem 0rem"}
						justifyContent={"space-around"}
					>
						{/* <Grow in={true} timeout={2000}> */}
						<SkillItem name={skill["name"]} icon={skill["icon"]} index={idx} />
						{/* </Grow> */}
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
