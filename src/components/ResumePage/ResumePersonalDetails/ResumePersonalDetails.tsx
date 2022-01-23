import CardBorderless from "../../shared/CardBorderless";
import profilePic from "../../../public/images/profile_photo.png";
import React from "react";
import { Avatar, CardContent, Typography } from "@mui/material";
import { PERSONAL_DETAILS } from "./constants";
import styled from "styled-components";

const CardBorderlessBlue = styled(CardBorderless)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProfileAvatar = styled(Avatar)`
  width: 125px;
  height: 125px;
  margin: auto;
`;

const ResumePersonalDetails = () => {
  return (
    <CardBorderlessBlue>
      <CardContent>
        <ProfileAvatar alt={PERSONAL_DETAILS.name} src={profilePic.src} />
        <Typography variant="h5" gutterBottom component="div">
          {PERSONAL_DETAILS.name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {PERSONAL_DETAILS.jobTitle}
        </Typography>
      </CardContent>
    </CardBorderlessBlue>
  );
};

export default ResumePersonalDetails;
