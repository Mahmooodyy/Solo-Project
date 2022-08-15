import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from "../../hooks/useReduxStore";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from "react-horizontal-datepicker";
import './HabitList.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Fab from '@mui/material/Fab/AddIcon';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { color, style } from '@mui/system';

// import AddIcon from '@mui/icons-material';


function HabitList() {


  const dispatch = useDispatch();
  const store = useReduxStore();
  const history = useHistory();

  const handleDoneClick= () => {

  };


  const handleEditClick = (habit) => {
    console.log(habit.habit);
    dispatch({type: 'SET_EDIT_HABIT', payload: habit});
    history.push('/info');
  }

  const handleEditClick2 = (habit) => {
    console.log(habit.habit);
    dispatch({type: 'SET_EDIT_HABIT', payload: habit});
    history.push('/info');
  }

  const deleteHabit = (habit) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You will not be able to undo this action!",
        // icon: 'warning',
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Delete',
                showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch({type: 'VANISH_HABIT', payload: habit.id });
        } 
    });
    dispatch({ type: "FETCH_HABITS" });
};

  // On load, useEffect for habits
  useEffect(() => {
    dispatch({ type: "FETCH_HABITS" });
  }, []);

  // bring in the list of habits
  console.log("This is items:", store.habits);
  console.log("This is the store:", store);


  const [selected, setSelected] = React.useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const tyty = () => {
    // 👇️ toggle
    setIsActive(current => !current);
  };

  return (
    <div className="container">
      <h2 class= "txt">Your Habits</h2>
      <h4 class= "txt1">I have finished my habits for the day. <span> <ToggleButton
      value="check"
      style={{
        backgroundColor: isActive ? 'green' : '',
        color: isActive ? 'white' : '',
      }}
      onClick={tyty}
    >
      <CheckIcon />
    </ToggleButton></span></h4>

      {store.habits.map((habit, i) => (
        <div
        key={i}>
          
            <Card sx={{ minWidth: 275 }}></Card>
        <CardContent>
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          {habit.habit} <EditIcon id = "edit" onClick={() => handleEditClick(habit)}variant="text">Edit Name</EditIcon>
        </Typography>
        <Typography variant="h5" component="div">
        {habit.description} <EditIcon id = "edit" onClick={() => handleEditClick2(habit)}variant="text">Edit Name</EditIcon>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Date Started: {habit.date}
        </Typography>
        <Typography variant="body2">
          <DatePicker
          onClick={handleDoneClick}
          endDate={31}
          />
        </Typography>
        <CardActions>
        <Button onClick={() => deleteHabit(habit)}size="small">Delete</Button>
      </CardActions>
      </CardContent>
      <Card />
        </div>
        
      ))}
    </div>
  );
}

export default HabitList;






