import CardBorderless from "../../shared/CardBorderless";
import React from "react";
import { CardContent, Typography } from "@mui/material";
import { ABOUT_ME, ABOUT_ME_DESCRIPTION } from "./constants";

const ResumeObjective = () => {
  return (
    <CardBorderless>
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {ABOUT_ME}
        </Typography>
        <Typography variant="body1" gutterBottom component="p">
          {ABOUT_ME_DESCRIPTION}
        </Typography>
      </CardContent>
    </CardBorderless>
  );
};

export default ResumeObjective;
