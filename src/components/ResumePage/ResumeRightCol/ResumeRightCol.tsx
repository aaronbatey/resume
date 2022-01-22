import React from "react";
import ResumeEducation from "../ResumeEducation";
import ResumeExperience from "../ResumeExperience";
import { Grid } from "@mui/material";

const ResumeRightCol = () => {
  return (
    <Grid container xs={8} spacing={2}>
      <Grid item xs={12}>
        <ResumeExperience />
        <ResumeEducation />
      </Grid>
    </Grid>
  );
};

export default ResumeRightCol;
