import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, TextField, Box, Typography } from '@mui/material';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Box className={css.boxFormStyle}>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Box component="form" onSubmit={handleRegisterSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            helperText="The name must contain only letters, apostrophes, hyphens and indents."
            type="text"
            // inputProps={{
            //   inputMode: 'text',
            //   pattern:
            //     '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
            // }}
            autoComplete="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            fullWidth
            label="Name"
            onChange={onChangeInput}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            helperText="Please enter a valid email address"
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={email}
            autoComplete="email"
            onChange={onChangeInput}
          />
          <TextField
            margin="normal"
            required
            helperText="The password must contain at least 7 characters"
            fullWidth
            type="password"
            name="password"
            value={password}
            label="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            id="password"
            autoComplete="new-password"
            onChange={onChangeInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={css.formBtnSubmit}
          >
            Sign Up
          </Button>
          <Box className={css.boxBottomFStyle}>
            <NavLink className={css.navLinkLogIn} to="/login">
              Already have an account? Sign in
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};
