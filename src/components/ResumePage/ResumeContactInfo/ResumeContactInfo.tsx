import GetIcon from "../../shared/GetIcon";
import React, { Fragment } from "react";
import { CONTACT_INFO } from "./constants";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ResumeContactInfo = () => {
  return (
    <Card variant="elevation">
      <CardContent>
        <List>
          {CONTACT_INFO.map(({ contactTitle, contactIcon }, i) => {
            return (
              <Fragment key={contactTitle}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <GetIcon iconName={contactIcon} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={contactTitle} />
                </ListItem>
                {i < CONTACT_INFO.length - 1 ? <Divider /> : null}
              </Fragment>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResumeContactInfo;
