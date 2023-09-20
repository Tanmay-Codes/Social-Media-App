import { Button, Card, CardContent, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function TopSkillsCard() {
  return (
    <Card>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Top Skills:</Typography>
            <Stack direction="row" spacing={1}>
              {skills.map((skill) => (
                <React.Fragment key={skill.id}>
                  <Chip label={skill.skill} />
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Button variant="contained">Add Skills</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TopSkillsCard;

const skills = [
  {
    id: 1,
    skill: "Guitarist",
  },
  {
    id: 2,
    skill: "Drummer",
  },
  {
    id: 3,
    skill: "Singing",
  },
  {
    id: 4,
    skill: "Song Writing",
  },
  {
    id: 5,
    skill: "Composer",
  },
];
