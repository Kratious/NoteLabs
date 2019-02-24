import React from "react";
import { withRouter } from 'react-router-dom';
import authentication from "../apis/authentication";

import * as routes from '../constants/routes';

import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
  Transition
} from "semantic-ui-react";

class LoginPage extends React.Component {
  state = { email: "", password: "", errorMessage: "", emailError: false, passwordError: false, visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    await authentication.post("/auth/login", {
      email: this.state.email,
      password: this.state.password,
    }).then(response => {
      console.log(response);
      this.props.history.push(routes.HOME);
    }).catch(error => {
      if(error.response) {
        console.log(error.response);
        this.setState({errorMessage: error.response.data.message, emailError: true, passwordError: true});
        this.toggleVisibility();
      } else if (error.request) {
        console.log("error request");
      } else {
        console.log(error);
        console.log("error");
      }
    })

  };

  renderError() {
    if (this.state.errorMessage) {
      return (
        <Transition animation='pulse' duration='400' visible={this.state.visible}>
          <Message error>
            <Icon name="warning" />
            {this.state.errorMessage}
          </Message>
        </Transition>
      );
    }
  }

  render() {
    return (
        <Grid
          textAlign="center"
          className="login-form"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
          
            <Header as="h2" textAlign="left">
              <Icon name="write square" />
              <Header.Content>Log in to Notelabs</Header.Content>
            </Header>
            <Form onSubmit={this.onFormSubmit} size="large">
              <Segment color="black">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email"
                  name="email"
                  error={this.state.emailError}
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  name="password"
                  type="password"
                  error={this.state.passwordError}
                  value={this.state.password}
                  onChange={this.onInputChange}
                />

                <Button color="black" fluid size="large">
                  Log In
                </Button>
                
                <Message>
                  New to us? <a>Sign Up</a>
                </Message>
              </Segment>
            </Form>
            {this.renderError()}
          </Grid.Column>
        </Grid>
    );
  }
}

export default withRouter(LoginPage);
