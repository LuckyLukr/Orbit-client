import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Grid,
  } from '@material-ui/core/';

const useStyles = makeStyles(() => ({
    form: {
      width: '100%',
    },
    button: {
      textAlign: 'center',
    },
  }));

function AddingForm({ onAdd, onExpandAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const [superpower, setSuperpower] = useState('');

  const classes = useStyles();

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleBirthChange(e) {
    setBirth(e.target.value);
  }

  function handleSuperpowerChange(e) {
    setSuperpower(e.target.value);
  }

  function addAstronaut(e) {
      e.preventDefault();
      const id = e._id;
      onAdd(firstName, lastName, birth, superpower, id);
      onExpandAdd();
      setFirstName('');
      setLastName('');
      setBirth('');
      setSuperpower('');
    }

    return (
        <form onSubmit={addAstronaut} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                variant="outlined"
                required
                fullWidth
                id="birth"
                name="birth"
                autoComplete="birth"
                value={birth}
                onChange={handleBirthChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="superpower"
                name="superpower"
                label="Superpower"
                variant="outlined"
                required
                fullWidth
                value={superpower}
                onChange={handleSuperpowerChange}
              />
            </Grid>
            <Grid className={classes.button} item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      );
}

export default AddingForm;