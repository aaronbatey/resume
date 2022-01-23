import CardBorderless from "../../shared/CardBorderless";
import profilePic from "../../../public/images/profile_photo.png";
import React from "react";
import { Avatar, CardContent, Typography } from "@mui/material";
import { PERSONAL_DETAILS } from "./constants";

const ResumePersonalDetails = () => {
  return (
    <CardBorderless>
      <CardContent>
        <Avatar alt={PERSONAL_DETAILS.name} src={profilePic.src} />
        <Typography variant="h5" gutterBottom component="div">
          {PERSONAL_DETAILS.name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {PERSONAL_DETAILS.jobTitle}
        </Typography>
      </CardContent>
    </CardBorderless>
  );
};

export default ResumePersonalDetails;
