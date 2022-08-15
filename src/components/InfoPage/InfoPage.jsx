import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useReduxStore from "../../hooks/useReduxStore";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import "./InfoPage.css";
import DatePicker from "react-horizontal-datepicker";
// import './HabitList.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Fab from '@mui/material/Fab/AddIcon';
import EditIcon from '@mui/icons-material/Edit';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const history = useHistory();
  const editHabit = useSelector((store) => store.editHabit);



  // On load, useEffect for items


  // bring in the list of items
  console.log("This is items:", store.habits);
  // console.log("This is habit:", habit);
  console.log("This is the store:", store);
  console.log("This is editHabit:", editHabit);

  function handleChange(event) {
    dispatch({ 
                type: 'EDIT_ONCHANGE', 
                payload: { property: 'habit', value: event.target.value }
            });
  }
  function handleChange2(event) {
    dispatch({ 
                type: 'EDIT_ONCHANGE', 
                payload: { property: 'description', value: event.target.value }
            });
  }

  function submitEdit(event) {
    event.preventDefault();

    // PUT REQUEST to /students/:id
    axios.put(`api/habits/${editHabit.id}`, editHabit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_CLEAR' });

            // refresh will happen with useEffect on Home
            history.push('/habits'); // back to list
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
    
  };


  return (
    <>
      <h2 class= "txt">Editing: {editHabit.habit}</h2>
      {/* <p>editing the habit: {editHabit.habit}</p> */}
      {/* <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event)}
          value={editHabit.habit}
        />
        <input type='submit' value='Save Changes' />
      </form> */}
      <TextField
          type="text"
          onChange={(event) => handleChange(event)}
          value={editHabit.habit}
          label="Habit Name"
          variant="outlined"
        />
        <div className="description"></div>
      <TextField
          type="text"
          onChange={(event) => handleChange2(event)}
          value={editHabit.description}
          label="Description and Notes"
          variant="outlined"
          multiline
          fullWidth
        /> <button class="btnn"onClick={submitEdit}>Save Changes</button>
    </>
  )
}



export default InfoPage;