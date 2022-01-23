import React from "react";
import ResumePersonalDetails from "../ResumePersonalDetails";
import { Grid } from "@mui/material";

const ResumeLeftCol = () => {
  return (
    <Grid item xs={4}>
      <ResumePersonalDetails />
    </Grid>
  );
};

export default ResumeLeftCol;
