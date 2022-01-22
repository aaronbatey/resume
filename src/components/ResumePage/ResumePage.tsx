import { Grid, Paper } from "@mui/material";
import React from "react";
import PageContainer from "../shared/PageContainer";
import ResumeLeftCol from "./ResumeLeftCol";
import ResumeRightCol from "./ResumeRightCol";

const ResumePage = () => {
  return (
    <PageContainer>
      <Paper>
        <Grid container>
          <ResumeLeftCol />
          <ResumeRightCol />
        </Grid>
      </Paper>
    </PageContainer>
  );
};

export default ResumePage;
