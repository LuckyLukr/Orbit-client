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

function AddingForm({ onAdd, onExpandRegisterForm }) {
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
      onAdd(firstName, lastName, birth, superpower);
      onExpandRegisterForm();
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
                inputProps={{ "data-testid": "fname-input" }}
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
                inputProps={{ "data-testid": "lname-input" }}
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
                inputProps={{ "data-testid": "birth-input" }}
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
                inputProps={{ "data-testid": "superpower-input" }}
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
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      );
}

export default AddingForm;