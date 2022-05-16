import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <TextField variant="standard" label="Email" type="email" name="email" value={credentials.email} onChange={handleChange} required/>
          <TextField variant="standard" label="Password" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <Button className="signup-button" variant="contained" sx={{ borderRadius: 10 }} type="submit">LOG IN</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}