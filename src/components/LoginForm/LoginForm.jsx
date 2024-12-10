import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Box, Typography } from '@mui/material';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
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

  const dispatch = useDispatch();

  const handleLoginSubmit = e => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    setEmail('');
    setPassword('');
  };
  return (
    <Box className={css.boxFormStyle}>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          helperText="Please enter a valid email address"
          fullWidth
          id="email"
          label="Email"
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
          Log In
        </Button>
      </Box>
    </Box>
  );
};
