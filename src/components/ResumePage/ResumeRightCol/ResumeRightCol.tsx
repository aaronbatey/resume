import React from "react";
import ResumeEducation from "../ResumeEducation";
import ResumeExperience from "../ResumeExperience";
import ResumeObjective from "../ResumeObjective";
import styled from "styled-components";
import { Grid } from "@mui/material";

const SecondaryGrid = styled(Grid)`
  padding-top: 25px;
`;

const ResumeRightCol = () => {
  return (
    <SecondaryGrid container item xs={12} md={8} spacing={2}>
      <Grid item xs={12}>
        <ResumeObjective />
        <ResumeExperience />
        <ResumeEducation />
      </Grid>
    </SecondaryGrid>
  );
};

export default ResumeRightCol;
