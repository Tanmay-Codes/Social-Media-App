import { Button, List, ListItem, Stack, TextField } from "@mui/material";
import React from "react";
import InfoCard from "../../components/InfoCard";
import InputModal from "../../components/InputModal";

function Gigs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Stack flex={2}>
      <InputModal
        showrate="yes"
        button="Post"
        pickers={"yes"}
        open={open}
        setOpen={setOpen}
      />
      <Stack
        direction="row"
        sx={{ width: "100%" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained">My Gigs</Button>
          <Button variant="contained" onClick={handleOpen}>
            Post a Gig
          </Button>
          <Button variant="contained">filter</Button>
        </Stack>
        <TextField placeholder="search" variant="standard" size="small" />
      </Stack>

      <br />

      <List
        sx={{
          maxHeight: "100vh",
          overflow: "auto",
          borderRadius: "10px",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        disablePadding
      >
        {gigs.map((items) => (
          <ListItem
            disablePadding
            sx={{ marginBottom: "5px", width: "100%" }}
            key={items.id}
          >
            <InfoCard
              userName={items.userName}
              designation={items.designation}
              from={items.from}
              gigTitle={items.gigTitle}
              userImg={items.userImg}
              gigDesc={items.gigDesc}
              rate={items.rate}
              venu={items.venu}
              inTime={items.inTime}
              outTime={items.outTime}
              dateEvent={items.dateEvent}
              datePosted={items.datePosted}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
const gigs = [
  {
    id: 1,
    userName: "Gyani Prabhu",
    designation: "Hotel Manager",
    from: "Plaza Hotel",
    gigTitle: "Open Mic",
    userImg: "https://randomuser.me/api/portraits/men/40.jpg",
    gigDesc:
      "Need a Singer with well experience in performing for a wide crowd and able to sing flawlessly for the pary",
    rate: 120,
    venu: "Ajnara Garden, Noida",
    inTime: "12:00",
    outTime: "15:00",
    dateEvent: "December 1, 2022",
    datePosted: "November 5, 2022",
  },
  {
    id: 2,
    userName: "Bruce Wayne",
    designation: "Event Manager",
    from: "xyz concert",
    gigTitle: "Guitarists for home band",
    userImg: "https://randomuser.me/api/portraits/men/42.jpg",
    gigDesc: "Need a lead guitarist for the band performance",
    rate: 500,
    venu: "Golf City, Noida",
    inTime: "18:00",
    outTime: "20:00",
    dateEvent: "December 20, 2022",
    datePosted: "Dec 15, 2022",
  },
  {
    id: 3,
    userName: "Romen Steinsin",
    gigTitle: "Rock Band Performance",
    designation: "Manger",
    from: "Impact Club",
    userImg: "https://randomuser.me/api/portraits/men/45.jpg",

    gigDesc:
      "Required a Rock Band for energetic performance at our club and engage the audience for hours",
    rate: 1000,
    venu: "Galleria, Noida",
    inTime: "18:00",
    outTime: "23:00",
    dateEvent: "December 28, 2022",
    datePosted: "December 25, 2022",
  },
  {
    id: 4,
    userName: "Johan Doen",
    gigTitle: "Drummer Needed",
    designation: "Owner",
    from: "Red Carpet Studios",
    userImg: "https://randomuser.me/api/portraits/men/46.jpg",
    gigDesc: "Need a Drummer for the band performance at an event",
    rate: 1220,
    venu: "Red Carpet, vaishali",
    inTime: "12:00",
    outTime: "18:00",
    dateEvent: "January 5, 2023",
    datePosted: "December 30, 2022",
  },
];

export default Gigs;
