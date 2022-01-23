import CardBorderless from "../../shared/CardBorderless";
import GetIcon from "../../shared/GetIcon";
import React, { Fragment } from "react";
import { EDUCATION, PAST_EDUCATION } from "./constants";
import {
  Avatar,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const ResumeEducation = () => {
  return (
    <CardBorderless>
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {EDUCATION}
        </Typography>
        <List>
          {PAST_EDUCATION.map(
            (
              { courseName, collegeName, startDate, endDate, educationIcon },
              i
            ) => {
              return (
                <Fragment key={`${courseName}${collegeName}`}>
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
                </Fragment>
              );
            }
          )}
        </List>
      </CardContent>
    </CardBorderless>
  );
};

export default ResumeEducation;
