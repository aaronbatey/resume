import GetIcon from "../../shared/GetIcon";
import React from "react";
import { EDUCATION, PAST_EDUCATION } from "./constants";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ResumeEducation = () => {
  return (
    <Card variant="elevation">
      <CardHeader title={EDUCATION} />
      <CardContent>
        <List>
          {PAST_EDUCATION.map(
            (
              { courseName, collegeName, startDate, endDate, educationIcon },
              i
            ) => {
              return (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <GetIcon iconName={educationIcon} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${courseName} at ${collegeName}`}
                      secondary={`${startDate} - ${endDate}`}
                      secondaryTypographyProps={{
                        style: { whiteSpace: "pre-line" },
                      }}
                    />
                  </ListItem>
                  {i < PAST_EDUCATION.length - 1 ? <Divider /> : null}
                </>
              );
            }
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResumeEducation;
