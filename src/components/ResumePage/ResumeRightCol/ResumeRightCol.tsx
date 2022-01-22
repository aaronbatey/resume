import { Card, Grid, styled } from "@mui/material";
import React from "react";
import ResumeExperience from "../ResumeExperience";

const ResumeRightCol = () => {
  return (
    <Grid container xs={8} spacing={2}>
      <Grid item xs={12}>
        <ResumeExperience />
      </Grid>
    </Grid>
  );
};

export default ResumeRightCol;
