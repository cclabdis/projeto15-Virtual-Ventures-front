// Cadastro/Login: deve ser possível criar uma conta e se autenticar como cliente do site.
import React from 'react';
import { Container, Form, Input, Button} from './Login.styled';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
      };
    }
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      // como?
    };
  
    render() {
      const { username, password } = this.state;
  
      return (
        <Container>
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <Button type="submit">Login</Button>
          </Form>
        </Container>
      );
    }
  }
  
  export default Login;


