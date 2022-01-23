import React from "react";
import ResumeContactInfo from "../ResumeContactInfo";
import ResumePersonalDetails from "../ResumePersonalDetails";
import ResumeSkills from "../ResumeSkills";
import { Grid } from "@mui/material";
import styled from "styled-components";

const PrimaryGrid = styled(Grid)`
  background: #ddf5ff;
`;

const ResumeLeftCol = () => {
  return (
    <PrimaryGrid item xs={4}>
      <ResumePersonalDetails />
      <ResumeContactInfo />
      <ResumeSkills />
    </PrimaryGrid>
  );
};

export default ResumeLeftCol;
