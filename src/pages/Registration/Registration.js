import React from "react";
import {Form, Button, Label, Container} from  './Registration.styled';

class Registration extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {}
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      const errors = this.validateForm();
  
      if (Object.keys(errors).length === 0) {
        // submit form data here
      } else {
        this.setState({ errors });
      }
    }
  
    validateForm() {
      const { name, email, password, confirmPassword } = this.state;
      const errors = {};
  
      if (!name) {
        errors.name = 'Name is required';
      }
  
      if (!email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!password) {
        errors.password = 'Password is required';
      } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }
  
      if (!confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
      } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
  
      return errors;
    }
    render() {
        const { name, email, password, confirmPassword, errors } = this.state;
    
        return (
            <Container>
          <Form onSubmit={this.handleSubmit}>
            <Label>
              Name:
              <input type="text" name="name" value={name} onChange={this.handleChange} />
              {errors.name && <div>{errors.name}</div>}
            </Label>
            <Label>
              Email:
              <input type="email" name="email" value={email} onChange={this.handleChange} />
              {errors.email && <div>{errors.email}</div>}
            </Label>
            <Label>
              Password:
              <input type="password" name="password" value={password} onChange={this.handleChange} />
              {errors.password && <div>{errors.password}</div>}
            </Label>
            <Label>
              Confirm Password:
              <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
              {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
            </Label>
            <Button type="submit">Sign Up</Button>
          </Form>
          </Container>
        );
      }
    }
    
    export default Registration;