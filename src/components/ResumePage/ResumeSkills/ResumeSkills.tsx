import React from "react";
import { SKILLS, KNOWN_SKILLS } from "./constants";
import { Card, CardContent, Chip, List, Typography } from "@mui/material";
import styled from "styled-components";

const ChipListItem = styled.li`
  margin: 2px;
  display: inline-flex;
`;

const ResumeSkills = () => {
  return (
    <Card variant="elevation">
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {SKILLS}
        </Typography>
        <List>
          {KNOWN_SKILLS.map(({ skillColor, skillLabel }) => {
            return (
              <ChipListItem>
                <Chip key={skillLabel} color={skillColor} label={skillLabel} />
              </ChipListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResumeSkills;
