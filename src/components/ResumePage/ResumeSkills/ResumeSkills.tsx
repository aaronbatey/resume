import CardBorderless from "../../shared/CardBorderless";
import React from "react";
import styled from "styled-components";
import { CardContent, Chip, List, Typography } from "@mui/material";
import { KNOWN_SKILLS, SKILLS } from "./constants";

const ChipListItem = styled.li`
  margin: 2px;
  display: inline-flex;
`;

const ResumeSkills = () => {
  return (
    <CardBorderless>
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {SKILLS}
        </Typography>
        <List>
          {KNOWN_SKILLS.map(({ skillColor, skillLabel }) => {
            return (
              <ChipListItem key={skillLabel}>
                <Chip key={skillLabel} color={skillColor} label={skillLabel} />
              </ChipListItem>
            );
          })}
        </List>
      </CardContent>
    </CardBorderless>
  );
};

export default ResumeSkills;
