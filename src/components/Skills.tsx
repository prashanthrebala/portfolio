import { useEffect, useRef, useState, useMemo, useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { Masonry } from "@mui/lab";
import { SkillMasonryItem } from "./SkillMasonryItem";
import { skills } from "../data/skills";
import { BreakpointsContext } from "../contexts/BreakpointsContext";

const tripleArray = (arr: any) => [...arr, ...arr, ...arr];

export const Skills = () => {
  const masonryRef = useRef<HTMLDivElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(2);
  const skillSVGArray = useMemo(
    () => tripleArray(skills.skillSet.sort(() => Math.random() - 0.5)),
    [skills]
  );
  const { mdScreen } = useContext(BreakpointsContext);

  useEffect(() => {
    const masonryScroller: HTMLDivElement | null = masonryRef.current;
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
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F6F1F1",
        paddingY: "4rem",
      }}
      direction={"column"}
      gap={1}
    >
      <Typography
        textAlign={"center"}
        fontFamily={"Secular One"}
        fontSize={{ xs: "2.5em", md: "4em" }}
        sx={{ color: "#000" }}
        paddingY={3.5}
      >
        Techn<span style={{ color: "#146C94" }}>i</span>cal Skills
      </Typography>
      <Grid
        container
        display={"flex"}
        justifyContent={{ xs: "center", lg: "space-evenly" }}
        alignItems={{ md: "center" }}
      >
        <Grid
          item
          ref={masonryRef}
          padding={1}
          xs={4}
          sx={{
            display: { xs: "none", lg: "block" },
            maxHeight: "70vh",
            overflow: "hidden",
          }}
          display={"flex"}
          justifyContent={"center"}
        >
          <Masonry columns={3} spacing={4}>
            {skillSVGArray.map((skill, index) => (
              <SkillMasonryItem
                icon={skill["icon"]}
                height={skill["height"]}
                key={index}
              />
            ))}
          </Masonry>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          lg={6}
          display={"flex"}
          justifyContent={"center"}
        >
          <Masonry columns={mdScreen ? 3 : 2} spacing={3}>
            {skills.categories.map((skill, index) => (
              <Paper
                key={index}
                sx={{
                  borderRadius: "1rem",
                  backgroundColor: "#AFD3E2",
                  color: "#000",
                }}
              >
                <Typography
                  variant="body1"
                  textAlign={"center"}
                  sx={{ backgroundColor: "#F6F1F1", borderRadius: "1rem" }}
                  fontSize={{ xs: "0.8em", md: "1em" }}
                  p={1}
                  m={1}
                >
                  {skill.title}
                </Typography>
                {skill.items.map((item, idx) => (
                  <Typography
                    margin={1}
                    key={idx}
                    textAlign={"center"}
                    fontSize={{ xs: "0.8em", md: "1em" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Paper>
            ))}
          </Masonry>
        </Grid>
      </Grid>
    </Grid>
  );
};
