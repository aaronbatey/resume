import GetIcon from "../../shared/GetIcon";
import React, { Fragment } from "react";
import { EXPERIENCE, PAST_EXPERIENCE } from "./constants";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const ResumeExperience = () => {
  return (
    <Card variant="elevation">
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {EXPERIENCE}
        </Typography>
        <List>
          {PAST_EXPERIENCE.map(
            (
              {
                jobTitle,
                companyName,
                startDate,
                endDate,
                description,
                jobIcon,
              },
              i
            ) => {
              return (
                <Fragment key={`${jobTitle}${companyName}`}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <GetIcon iconName={jobIcon} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${jobTitle} at ${companyName}`}
                      secondary={`${startDate} - ${endDate}\n${description}`}
                      secondaryTypographyProps={{
                        style: { whiteSpace: "pre-line" },
                      }}
                    />
                  </ListItem>
                  {i < PAST_EXPERIENCE.length - 1 ? <Divider /> : null}
                </Fragment>
              );
            }
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResumeExperience;
