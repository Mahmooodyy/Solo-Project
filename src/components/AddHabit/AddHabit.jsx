import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from "../../hooks/useReduxStore";
import { useHistory } from "react-router-dom";
import "./AddHabit.css";
import swal from "sweetalert";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { isSameDay } from "date-fns";
import { motion } from "framer-motion";
import { TimerOutlined } from "@material-ui/icons";

function AddHabit() {
  const history = useHistory();

  const [newHabit, setNewHabit] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDate, setNewDate] = useState("");
  const [value, setValue] = React.useState("Controlled");

  const dispatch = useDispatch();
  const store = useReduxStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(newHabit, newDesc);

    dispatch({
      type: "ADD_HABIT",
      payload: { habit: newHabit, description: newDesc },
    });
    dispatch({ type: "FETCH_HABITS" });
    
    swal("Habit Added Successfully!", "Visit the Home page to see your habits!");
    setNewHabit("");
    setNewDesc("");
        dispatch({ type: "FETCH_HABITS" });
  };

  //   On load, useEffect for items
  useEffect(() => {
    dispatch({ type: "FETCH_HABITS" });
  }, []);

  // bring in the list of items
  console.log("This is items:", store.habits);
  console.log("This is the store:", store);

  return (
    <div className="container">
      <h2 class= "txt">Add a Habit</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>habit</label>
        <input
          type="text"
          value={newHabit}
          onChange={(event) => setNewHabit(event.target.value)}
        ></input>
        <label>description</label>
        <input
          type="text"
          value={newDesc}
          onChange={(event) => setNewDesc(event.target.value)}
        ></input> */}
        <TextField
          type="text"
          value={newHabit}
          onChange={(event) => setNewHabit(event.target.value)}
          label="Habit Name"
          variant="outlined"
        />
        <div className="description"></div>
        <TextField
          type="text"
          value={newDesc}
          onChange={(event) => setNewDesc(event.target.value)}
          id="outlined-multiline-static"
          label="Description and Notes"
          multiline
          fullWidth
        /> <button class="sbtn" type="submit">SUBMIT</button>
        {/* <label>date</label> */}
        {/* <input
          type="text"
          value={newDate}
          onChange={(event) => setNewDate(event.target.value)}
        ></input> */}
        
      </form>
    </div>
  );
}

export default AddHabit;
