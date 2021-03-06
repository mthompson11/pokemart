import { Component } from 'react';
import { signUp } from '../../utilities/users-service'
import './SignUpForm.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
      };
    
    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({ error : 'Sign Up Failed - Try Again' });
        };
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField variant="standard" label="Name" name="name" value={this.state.name} onChange={this.handleChange} required/>
                    <TextField variant="standard" label="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <TextField variant="standard" label="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <TextField variant="standard" label="Confirm" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <Button className="signup-button" variant="contained" sx={{ borderRadius: 10 }} type="submit" disabled={disable}>SIGN UP</Button>
                </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}