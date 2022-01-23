import React from "react";
import { OBJECTIVE, OBJECTIVE_DESCRIPTION } from "./constants";
import { Card, CardContent, Typography } from "@mui/material";

const ResumeObjective = () => {
  return (
    <Card variant="elevation">
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {OBJECTIVE}
        </Typography>
        <Typography variant="body1" gutterBottom component="p">
          {OBJECTIVE_DESCRIPTION}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResumeObjective;
