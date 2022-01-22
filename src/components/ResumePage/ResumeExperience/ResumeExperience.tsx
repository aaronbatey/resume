import GetIcon from "../../shared/GetIcon";
import React from "react";
import { EXPERIENCE, PAST_EXPERIENCE } from "./constants";
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

const ResumeExperience = () => {
  return (
    <Card variant="elevation">
      <CardHeader title={EXPERIENCE} />
      <CardContent>
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
                <>
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
                </>
              );
            }
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResumeExperience;
