import CardBorderless from "../../shared/CardBorderless";
import React from "react";
import { CardContent, Typography } from "@mui/material";
import { OBJECTIVE, OBJECTIVE_DESCRIPTION } from "./constants";

const ResumeObjective = () => {
  return (
    <CardBorderless>
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {OBJECTIVE}
        </Typography>
        <Typography variant="body1" gutterBottom component="p">
          {OBJECTIVE_DESCRIPTION}
        </Typography>
      </CardContent>
    </CardBorderless>
  );
};

export default ResumeObjective;
