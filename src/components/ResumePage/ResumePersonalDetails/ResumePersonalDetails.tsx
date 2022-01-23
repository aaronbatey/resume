import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import profilePic from "../../../public/images/profile_photo.png";
import { PERSONAL_DETAILS } from "./constants";

const ResumePersonalDetails = () => {
  return (
    <Card variant="elevation">
      <CardContent>
        <Avatar alt={PERSONAL_DETAILS.name} src={profilePic.src} />
        <Typography variant="h5" gutterBottom component="div">
          {PERSONAL_DETAILS.name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {PERSONAL_DETAILS.jobTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResumePersonalDetails;
