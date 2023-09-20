import * as React from "react";
import TextField from "@mui/material/TextField";
// import { Stack } from "@mui/system";
import { Autocomplete } from "@mui/material";

export default function SelectTextFields(props) {
  // const [listItems, setListItems] = React.useState([
  //   { id: 1, value: "something" },
  // ]);
  // console.log(listItems);
  // const handleChange = (event) => {
  //   const newListItems = [
  //     ...listItems,
  //     {
  //       id: listItems.length === 0 ? 1 : listItems.length + 1,
  //       value: event.target.value,
  //     },
  //   ];
  //   console.log(newListItems);
  //   console.log(event.target.value);
  //   setListItems(newListItems);
  // };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.list}
        renderInput={(params) => <TextField {...params} label="skills" />}
      />
    </>
  );
}
