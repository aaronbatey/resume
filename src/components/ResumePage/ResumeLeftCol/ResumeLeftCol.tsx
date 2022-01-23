import React from "react";
import ResumePersonalDetails from "../ResumePersonalDetails";
import ResumeContactInfo from "../ResumeContactInfo";
import { Grid } from "@mui/material";

const ResumeLeftCol = () => {
  return (
    <Grid item xs={4}>
      <ResumePersonalDetails />
      <ResumeContactInfo />
    </Grid>
  );
};

export default ResumeLeftCol;
