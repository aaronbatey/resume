import React from "react";
import ResumeContactInfo from "../ResumeContactInfo";
import ResumePersonalDetails from "../ResumePersonalDetails";
import ResumeSkills from "../ResumeSkills";
import { Grid } from "@mui/material";

const ResumeLeftCol = () => {
  return (
    <Grid item xs={4}>
      <ResumePersonalDetails />
      <ResumeContactInfo />
      <ResumeSkills />
    </Grid>
  );
};

export default ResumeLeftCol;
